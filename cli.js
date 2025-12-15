#!/usr/bin/env node

import inquirer from 'inquirer';
import { generateBadge } from './index.js';
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

  return answers;
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
      humanName: '',
      disclosureText: '',
      outputPath: 'badge.svg'
    };
    console.log('Using default options (MIT, medium, blue)...');
  } else {
    // Interactive mode
    options = await promptForOptions();
  }

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
