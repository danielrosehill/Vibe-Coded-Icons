// Badge generation module for Vibe-Coded Icons

const SIZES = {
  small: { width: 200, height: 75 },
  medium: { width: 400, height: 100 },
  large: { width: 600, height: 150 }
};

const COLORS = {
  blue: { start: '#1e3a8a', end: '#3b82f6', type: 'gradient' },
  green: { start: '#065f46', end: '#10b981', type: 'gradient' },
  purple: { start: '#581c87', end: '#a855f7', type: 'gradient' },
  orange: { start: '#9a3412', end: '#f97316', type: 'gradient' },
  red: { start: '#991b1b', end: '#ef4444', type: 'gradient' },
  gray: { start: '#374151', end: '#6b7280', type: 'gradient' }
};

const DEFAULT_DISCLOSURE_TEXT = 'AI-Generated Code';

const DISCLOSURE_PRESETS = {
  default: 'AI-Generated Code',
  casual: 'Made with AI',
  professional: 'AI-Assisted Development',
  transparent: 'This code was AI-generated',
  collaborative: 'Human + AI Collaboration'
};

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Generate an AI license badge SVG
 * @param {Object} options - Badge configuration
 * @param {string} options.license - License type (MIT, Apache-2.0, etc.)
 * @param {string} [options.size='medium'] - Badge size (small, medium, large)
 * @param {string} [options.color='blue'] - Badge color (blue, green, purple, orange, red, gray)
 * @param {string} [options.modelCompany] - AI model company (e.g., Anthropic, OpenAI)
 * @param {string} [options.modelName] - AI model name (e.g., Opus 4.5, GPT-4)
 * @param {string} [options.humanName] - Human contributor name (optional)
 * @param {string} [options.disclosureText] - Custom disclosure text (optional)
 * @param {string} [options.fontFamily='Arial'] - Font family
 * @param {string} [options.fontColor='#ffffff'] - Font color
 * @returns {string} SVG markup
 */
export function generateBadge(options) {
  const {
    license,
    size = 'medium',
    color = 'blue',
    modelCompany = '',
    modelName = '',
    humanName = '',
    disclosureText,
    fontFamily = 'Arial',
    fontColor = '#ffffff'
  } = options;

  // Validate inputs
  if (!license) {
    throw new Error('License is required');
  }

  if (!SIZES[size]) {
    throw new Error(`Invalid size: ${size}. Must be one of: ${Object.keys(SIZES).join(', ')}`);
  }

  if (!COLORS[color]) {
    throw new Error(`Invalid color: ${color}. Must be one of: ${Object.keys(COLORS).join(', ')}`);
  }

  const dimensions = SIZES[size];
  const colorScheme = COLORS[color];
  const disclosure = disclosureText || DEFAULT_DISCLOSURE_TEXT;

  // Determine font sizes based on badge size
  let titleFontSize, licenseFontSize, detailsFontSize;
  switch (size) {
    case 'small':
      titleFontSize = 14;
      licenseFontSize = 12;
      detailsFontSize = 10;
      break;
    case 'medium':
      titleFontSize = 20;
      licenseFontSize = 16;
      detailsFontSize = 12;
      break;
    case 'large':
      titleFontSize = 28;
      licenseFontSize = 22;
      detailsFontSize = 16;
      break;
  }

  // Build gradient definition
  const gradientDef = `
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${colorScheme.start};stop-opacity:1" />
        <stop offset="100%" style="stop-color:${colorScheme.end};stop-opacity:1" />
      </linearGradient>
    </defs>`;

  // Calculate vertical positions based on what fields we have
  const hasModelInfo = !!(modelCompany || modelName);
  const hasHumanName = !!humanName;

  let titleY, modelCompanyY, modelNameY, licenseY, humanY;

  if (hasModelInfo && hasHumanName) {
    // All fields present
    titleY = dimensions.height * 0.18;
    modelCompanyY = dimensions.height * 0.38;
    modelNameY = dimensions.height * 0.52;
    licenseY = dimensions.height * 0.70;
    humanY = dimensions.height * 0.85;
  } else if (hasModelInfo) {
    // Model info but no human name
    titleY = dimensions.height * 0.22;
    modelCompanyY = dimensions.height * 0.45;
    modelNameY = dimensions.height * 0.62;
    licenseY = dimensions.height * 0.80;
  } else if (hasHumanName) {
    // Human name but no model info
    titleY = dimensions.height * 0.25;
    licenseY = dimensions.height * 0.55;
    humanY = dimensions.height * 0.75;
  } else {
    // Just disclosure and license
    titleY = dimensions.height * 0.35;
    licenseY = dimensions.height * 0.65;
  }

  // Escape text for XML
  const safeDisclosure = escapeXml(disclosure);
  const safeLicense = escapeXml(license);
  const safeModelCompany = modelCompany ? escapeXml(modelCompany) : '';
  const safeModelName = modelName ? escapeXml(modelName) : '';
  const safeHumanName = humanName ? escapeXml(humanName) : '';

  // Build SVG
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${dimensions.width}" height="${dimensions.height}">
  ${gradientDef}
  <rect width="${dimensions.width}" height="${dimensions.height}" fill="url(#grad)" rx="8"/>

  <!-- Disclosure text -->
  <text x="${dimensions.width / 2}" y="${titleY}"
        font-family="${escapeXml(fontFamily)}"
        font-size="${titleFontSize}"
        font-weight="bold"
        fill="${escapeXml(fontColor)}"
        text-anchor="middle"
        dominant-baseline="middle">${safeDisclosure}</text>`;

  // Add model information if provided
  if (hasModelInfo) {
    if (safeModelCompany) {
      svg += `

  <!-- Model Company -->
  <text x="${dimensions.width / 2}" y="${modelCompanyY}"
        font-family="${escapeXml(fontFamily)}"
        font-size="${licenseFontSize}"
        fill="${escapeXml(fontColor)}"
        text-anchor="middle"
        dominant-baseline="middle">${safeModelCompany}</text>`;
    }

    if (safeModelName) {
      svg += `

  <!-- Model Name -->
  <text x="${dimensions.width / 2}" y="${modelNameY}"
        font-family="${escapeXml(fontFamily)}"
        font-size="${licenseFontSize}"
        fill="${escapeXml(fontColor)}"
        text-anchor="middle"
        dominant-baseline="middle">🤖 ${safeModelName}</text>`;
    }
  }

  svg += `

  <!-- License -->
  <text x="${dimensions.width / 2}" y="${licenseY}"
        font-family="${escapeXml(fontFamily)}"
        font-size="${licenseFontSize}"
        fill="${escapeXml(fontColor)}"
        text-anchor="middle"
        dominant-baseline="middle">📄 License: ${safeLicense}</text>`;

  // Add human name if provided
  if (hasHumanName) {
    svg += `

  <!-- Human contributor -->
  <text x="${dimensions.width / 2}" y="${humanY}"
        font-family="${escapeXml(fontFamily)}"
        font-size="${detailsFontSize}"
        fill="${escapeXml(fontColor)}"
        text-anchor="middle"
        dominant-baseline="middle">👤 ${safeHumanName}</text>`;
  }

  svg += '\n</svg>';

  return svg;
}

// Export constants for CLI use
export { SIZES, COLORS, DISCLOSURE_PRESETS };
