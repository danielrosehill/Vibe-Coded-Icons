#!/usr/bin/env node

import inquirer from 'inquirer';
import { generateBadge, DISCLOSURE_PRESETS } from '../index.js';
import fs from 'fs';
import path from 'path';

const LICENSES = [
  'MIT',
  'Apache-2.0',
  'GPL-3.0',
  'BSD-3-Clause',
  'ISC',
  'LGPL-3.0',
  'MPL-2.0',
  'AGPL-3.0',
  'Unlicense',
  'CC0-1.0'
];

const SIZES = ['small', 'medium', 'large'];
const COLORS = ['blue', 'green', 'purple', 'orange', 'red', 'gray'];

const DISCLOSURE_OPTIONS = [
  { name: 'AI-Generated Code (default)', value: 'default' },
  { name: 'Made with AI (casual)', value: 'casual' },
  { name: 'AI-Assisted Development (professional)', value: 'professional' },
  { name: 'This code was AI-generated (transparent)', value: 'transparent' },
  { name: 'Human + AI Collaboration (collaborative)', value: 'collaborative' },
  { name: 'Custom (enter your own)', value: 'custom' }
];

async function promptForOptions() {
  console.log('\n🎨 Vibe-Coded Icons - Quick Setup for Your Repository\n');
  console.log('This will generate an AI transparency badge and add it to your README.\n');

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'modelCompany',
      message: '🤖 Which AI company created the model? (e.g., Anthropic, OpenAI, Google)',
      default: 'Anthropic',
      validate: (input) => {
        if (!input.trim()) {
          return 'Model company is required for transparency';
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'modelName',
      message: '🤖 Which AI model did you use? (e.g., Claude Opus 4.5, GPT-4, Gemini Pro)',
      default: 'Claude Opus 4.5',
      validate: (input) => {
        if (!input.trim()) {
          return 'Model name is required for transparency';
        }
        return true;
      }
    },
    {
      type: 'list',
      name: 'disclosurePreset',
      message: '💬 Choose disclosure text style:',
      choices: DISCLOSURE_OPTIONS,
      default: 'default'
    }
  ]);

  // If user chose custom, ask for custom text
  if (answers.disclosurePreset === 'custom') {
    const customAnswer = await inquirer.prompt([
      {
        type: 'input',
        name: 'customDisclosure',
        message: '💬 Enter your custom disclosure text:',
        validate: (input) => {
          if (!input.trim()) {
            return 'Disclosure text cannot be empty';
          }
          return true;
        }
      }
    ]);
    answers.disclosureText = customAnswer.customDisclosure;
  } else {
    answers.disclosureText = DISCLOSURE_PRESETS[answers.disclosurePreset];
  }

  // Continue with remaining questions
  const moreAnswers = await inquirer.prompt([
    {
      type: 'list',
      name: 'license',
      message: '📄 Which license did you use?',
      choices: LICENSES,
      default: 'MIT'
    },
    {
      type: 'input',
      name: 'humanName',
      message: '👤 Your name (human contributor, optional):',
      default: ''
    },
    {
      type: 'list',
      name: 'size',
      message: '📏 What size badge would you like?',
      choices: SIZES,
      default: 'medium'
    },
    {
      type: 'list',
      name: 'color',
      message: '🎨 What color would you like?',
      choices: COLORS,
      default: 'blue'
    },
    {
      type: 'list',
      name: 'badgeLocation',
      message: '📍 Where should the badge be placed?',
      choices: [
        { name: 'Header (after first heading)', value: 'header' },
        { name: 'Footer (at end of file)', value: 'footer' },
        { name: 'Skip badge injection (just create file)', value: 'skip' }
      ],
      default: 'header'
    },
    {
      type: 'list',
      name: 'addDisclosureNote',
      message: '📝 Add a disclosure note to README?',
      choices: [
        { name: 'Yes, add note to footer', value: 'footer' },
        { name: 'Yes, add note to header', value: 'header' },
        { name: 'No, badge only', value: 'none' }
      ],
      default: 'footer'
    }
  ]);

  return { ...answers, ...moreAnswers };
}

function findReadmeFile() {
  const possibleNames = ['README.md', 'readme.md', 'Readme.md', 'README.MD'];

  for (const name of possibleNames) {
    if (fs.existsSync(name)) {
      return name;
    }
  }

  return null;
}

function injectBadgeIntoReadme(readmePath, badgePath, options) {
  let content;

  if (readmePath && fs.existsSync(readmePath)) {
    // Read existing README
    content = fs.readFileSync(readmePath, 'utf8');
    console.log(`\n📄 Found existing ${readmePath}`);
  } else {
    // Create new README
    content = '# Project\n\n';
    readmePath = 'README.md';
    console.log('\n📄 Creating new README.md');
  }

  const { badgeLocation, addDisclosureNote, modelCompany, modelName, disclosureText, license, humanName } = options;

  // Create the badge markdown
  const badgeMarkdown = `![AI-Generated License Badge](${badgePath})`;

  // Create disclosure note
  const disclosureNote = createDisclosureNote(modelCompany, modelName, disclosureText, license, humanName);

  // Check if badge already exists
  if (content.includes(badgePath)) {
    console.log('⚠️  Badge reference already exists in README. Skipping badge injection.');
  } else if (badgeLocation !== 'skip') {
    // Inject badge
    if (badgeLocation === 'header') {
      content = injectToHeader(content, badgeMarkdown);
      console.log(`✅ Badge added to header of ${readmePath}`);
    } else if (badgeLocation === 'footer') {
      content = injectToFooter(content, badgeMarkdown);
      console.log(`✅ Badge added to footer of ${readmePath}`);
    }
  }

  // Inject disclosure note if requested
  if (addDisclosureNote !== 'none') {
    // Check if disclosure note marker already exists
    if (content.includes('## 🤖 AI Transparency')) {
      console.log('⚠️  Disclosure note already exists in README. Skipping note injection.');
    } else {
      if (addDisclosureNote === 'header') {
        content = injectToHeader(content, disclosureNote);
        console.log(`✅ Disclosure note added to header of ${readmePath}`);
      } else if (addDisclosureNote === 'footer') {
        content = injectToFooter(content, disclosureNote);
        console.log(`✅ Disclosure note added to footer of ${readmePath}`);
      }
    }
  }

  // Write the updated README
  fs.writeFileSync(readmePath, content);

  return readmePath;
}

function injectToHeader(content, insertText) {
  // Try to inject after the first heading
  const headingMatch = content.match(/^#\s+.+$/m);

  if (headingMatch) {
    // Insert after the first heading
    const headingIndex = content.indexOf(headingMatch[0]);
    const afterHeading = headingIndex + headingMatch[0].length;

    return content.slice(0, afterHeading) +
           '\n\n' + insertText + '\n' +
           content.slice(afterHeading);
  } else {
    // No heading found, prepend to the top
    return insertText + '\n\n' + content;
  }
}

function injectToFooter(content, insertText) {
  // Add to the end of the file
  const trimmedContent = content.trimEnd();
  return trimmedContent + '\n\n' + insertText + '\n';
}

function createDisclosureNote(modelCompany, modelName, disclosureText, license, humanName) {
  let note = `## 🤖 AI Transparency\n\n`;
  note += `This project ${disclosureText.toLowerCase()}.\n\n`;
  note += `- **AI Model**: ${modelCompany} ${modelName}\n`;
  note += `- **License**: ${license}\n`;

  if (humanName) {
    note += `- **Human Contributor**: ${humanName}\n`;
  }

  note += `\nWe believe in transparency about AI usage in software development.`;

  return note;
}

async function run() {
  try {
    // Get user preferences
    const options = await promptForOptions();

    // Generate the badge
    const badgeOptions = {
      license: options.license,
      size: options.size,
      color: options.color,
      modelCompany: options.modelCompany,
      modelName: options.modelName,
      disclosureText: options.disclosureText
    };

    if (options.humanName) {
      badgeOptions.humanName = options.humanName;
    }

    const svg = generateBadge(badgeOptions);

    // Save the badge
    const badgePath = 'vibe-coded-badge.svg';
    fs.writeFileSync(badgePath, svg);
    console.log(`\n✅ Badge generated: ${badgePath}`);
    console.log(`   Model: ${options.modelCompany} ${options.modelName}`);
    console.log(`   Disclosure: ${options.disclosureText}`);
    console.log(`   License: ${options.license}`);
    console.log(`   Size: ${options.size}`);
    console.log(`   Color: ${options.color}`);

    // Find and update README
    const readmePath = findReadmeFile();
    const updatedReadme = injectBadgeIntoReadme(readmePath, badgePath, options);

    console.log('\n🎉 All done! Your repository now has an AI transparency badge.\n');
    console.log('Next steps:');
    console.log(`  1. Review ${updatedReadme} to see the badge`);
    console.log(`  2. Commit both ${updatedReadme} and ${badgePath} to your repository`);
    console.log('  3. Push to GitHub to display the badge\n');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

run().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
