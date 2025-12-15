#!/usr/bin/env node

import inquirer from 'inquirer';
import { generateBadge } from '../index.js';
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

async function promptForOptions() {
  console.log('\n🎨 Vibe-Coded Icons - Quick Setup for Your Repository\n');
  console.log('This will generate an AI transparency badge and add it to your README.\n');

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'license',
      message: 'Which license did you use?',
      choices: LICENSES,
      default: 'MIT'
    },
    {
      type: 'list',
      name: 'size',
      message: 'What size badge would you like?',
      choices: SIZES,
      default: 'medium'
    },
    {
      type: 'list',
      name: 'color',
      message: 'What color would you like?',
      choices: COLORS,
      default: 'blue'
    },
    {
      type: 'input',
      name: 'humanName',
      message: 'Human-friendly name for the license (optional):',
      default: ''
    },
    {
      type: 'input',
      name: 'disclosureText',
      message: 'Disclosure text (optional, press enter for default):',
      default: ''
    }
  ]);

  return answers;
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

function injectBadgeIntoReadme(readmePath, badgeSvg, badgePath) {
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

  // Create the badge markdown
  const badgeMarkdown = `![AI-Generated License Badge](${badgePath})`;

  // Check if badge already exists
  if (content.includes(badgePath)) {
    console.log('⚠️  Badge reference already exists in README. Skipping injection.');
    return readmePath;
  }

  // Try to inject after the first heading
  const headingMatch = content.match(/^#\s+.+$/m);

  if (headingMatch) {
    // Insert after the first heading
    const headingIndex = content.indexOf(headingMatch[0]);
    const afterHeading = headingIndex + headingMatch[0].length;

    content =
      content.slice(0, afterHeading) +
      '\n\n' + badgeMarkdown + '\n' +
      content.slice(afterHeading);
  } else {
    // No heading found, prepend to the top
    content = badgeMarkdown + '\n\n' + content;
  }

  // Write the updated README
  fs.writeFileSync(readmePath, content);
  console.log(`✅ Badge reference added to ${readmePath}`);

  return readmePath;
}

async function run() {
  try {
    // Get user preferences
    const options = await promptForOptions();

    // Generate the badge
    const badgeOptions = {
      license: options.license,
      size: options.size,
      color: options.color
    };

    if (options.humanName) {
      badgeOptions.humanName = options.humanName;
    }

    if (options.disclosureText) {
      badgeOptions.disclosureText = options.disclosureText;
    }

    const svg = generateBadge(badgeOptions);

    // Save the badge
    const badgePath = 'vibe-coded-badge.svg';
    fs.writeFileSync(badgePath, svg);
    console.log(`\n✅ Badge generated: ${badgePath}`);
    console.log(`   License: ${options.license}`);
    console.log(`   Size: ${options.size}`);
    console.log(`   Color: ${options.color}`);

    // Find and update README
    const readmePath = findReadmeFile();
    const updatedReadme = injectBadgeIntoReadme(readmePath, svg, badgePath);

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
