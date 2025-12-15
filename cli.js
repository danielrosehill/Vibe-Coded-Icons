#!/usr/bin/env node

import inquirer from 'inquirer';
import { generateBadge, DISCLOSURE_PRESETS } from './index.js';
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
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'modelCompany',
      message: 'Model company (e.g., Anthropic, OpenAI):',
      default: 'Anthropic'
    },
    {
      type: 'input',
      name: 'modelName',
      message: 'Model name (e.g., Claude Opus 4.5, GPT-4):',
      default: 'Claude Opus 4.5'
    },
    {
      type: 'list',
      name: 'disclosurePreset',
      message: 'Choose disclosure text style:',
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
        message: 'Enter your custom disclosure text:',
        validate: (input) => input.trim() ? true : 'Disclosure text cannot be empty'
      }
    ]);
    answers.disclosureText = customAnswer.customDisclosure;
  } else {
    answers.disclosureText = DISCLOSURE_PRESETS[answers.disclosurePreset];
  }

  const moreAnswers = await inquirer.prompt([
    {
      type: 'list',
      name: 'license',
      message: 'Which license did you use?',
      choices: LICENSES,
      default: 'MIT'
    },
    {
      type: 'input',
      name: 'humanName',
      message: 'Your name (human contributor, optional):',
      default: ''
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
      name: 'outputPath',
      message: 'Output file path:',
      default: 'badge.svg',
      validate: (input) => {
        if (!input.endsWith('.svg')) {
          return 'Output file must have .svg extension';
        }
        return true;
      }
    }
  ]);

  return { ...answers, ...moreAnswers };
}

async function runCLI() {
  console.log('\n🎨 Vibe-Coded Icons - AI License Badge Generator\n');

  const args = process.argv.slice(2);
  let options;

  if (args.includes('--default') || args.includes('-d')) {
    // Use default options
    options = {
      license: 'MIT',
      size: 'medium',
      color: 'blue',
      modelCompany: 'Anthropic',
      modelName: 'Claude Opus 4.5',
      humanName: '',
      disclosureText: 'AI-Generated Code',
      outputPath: 'badge.svg'
    };
    console.log('Using default options (Anthropic Claude Opus 4.5, MIT, medium, blue)...');
  } else {
    // Interactive mode
    options = await promptForOptions();
  }

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

  try {
    const svg = generateBadge(badgeOptions);

    // Create output directory if it doesn't exist
    const outputDir = path.dirname(options.outputPath);
    if (outputDir !== '.' && !fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the SVG file
    fs.writeFileSync(options.outputPath, svg);

    console.log(`\n✅ Badge generated successfully: ${options.outputPath}`);
    console.log(`   Model: ${options.modelCompany} ${options.modelName}`);
    console.log(`   Disclosure: ${options.disclosureText}`);
    console.log(`   License: ${options.license}`);
    console.log(`   Size: ${options.size}`);
    console.log(`   Color: ${options.color}`);
    if (options.humanName) {
      console.log(`   Human Name: ${options.humanName}`);
    }
    console.log('\n');
  } catch (error) {
    console.error('❌ Error generating badge:', error.message);
    process.exit(1);
  }
}

runCLI().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});
