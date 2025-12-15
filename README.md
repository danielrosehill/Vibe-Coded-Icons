# 🤖 Vibe Coding Badge Generator

A beautiful, customizable badge generator for disclosing AI-assisted coding in your projects. Create transparent, professional badges that show which AI models contributed to your code.

## 🎯 Purpose

In the spirit of open collaboration and transparency, these badges help developers disclose when AI tools have been used in their projects. Whether it's Claude, GPT, or other models - let your users know!

## ✨ Features

- **4 Badge Styles**: Display, Banner, Square, and QR Code variants
- **4 Gradient Themes**: Blue, Purple, Green, and Orange color schemes
- **Fully Customizable**: Add model company, model name, license, and your name
- **Multiple Formats**: Export as PNG or SVG (vector)
- **QR Code Support**: Generate scannable badges with embedded disclosure details
- **Live Preview**: See your badge update in real-time
- **No Installation**: Runs entirely in your browser

## 🚀 Quick Start

### Option 1: Use the CLI (Recommended)

Install globally via NPM:
```bash
npm install -g vibe-coded-icons
```

Then run interactively:
```bash
vibe-coded-icons
# or use the shorter alias
vci
```

Use default options for quick generation:
```bash
vibe-coded-icons --default
# or
vci -d
```

### Option 2: Use as a Node.js Module

Install as a dependency:
```bash
npm install vibe-coded-icons
```

Use in your code:
```javascript
import { generateBadge } from 'vibe-coded-icons';

const svg = generateBadge({
  license: 'MIT',
  size: 'medium',
  color: 'blue',
  humanName: 'Daniel Rosehill'
});

// Save to file or use in your application
```

### Option 3: Use Online (GitHub Pages)

Visit: [https://danielrosehill.github.io/Vibe-Coded-Icons/](https://danielrosehill.github.io/Vibe-Coded-Icons/)

### Option 4: Run Locally

1. Clone this repository:
```bash
git clone https://github.com/danielrosehill/Vibe-Coded-Icons.git
cd Vibe-Coded-Icons
```

2. Open `index.html` in your browser or run a local server:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## 📐 Badge Variants

### Display Badge (200×75px)
Perfect for inline README placement, sits nicely with other badges.

### Banner Badge (400×100px)
Larger, more prominent - great for top-of-page hero sections.

### Square Badge (200×200px)
Flexible aspect ratio for sidebars, profile pages, or square placements.

### QR Code Badge (300×300px)
Scannable badge that encodes:
- Model company and name
- License information
- Human contributor name

## 🎨 CLI Usage

When you run `vibe-coded-icons` interactively, you'll be prompted for:

- **License**: Choose from popular open source licenses (MIT, Apache-2.0, GPL-3.0, etc.)
- **Size**: small, medium, or large
- **Color**: blue, green, purple, orange, red, or gray
- **Human Name** (optional): Your name or contributor name
- **Disclosure Text** (optional): Custom disclosure message
- **Output Path**: Where to save the badge (defaults to `badge.svg`)

### CLI Options

- `--default` or `-d`: Use default options (MIT, medium, blue) for quick generation
- Interactive mode (default): Guided prompts for all options

### Example CLI Session

```bash
$ vci

🎨 Vibe-Coded Icons - AI License Badge Generator

? Which license did you use? MIT
? What size badge would you like? medium
? What color would you like? blue
? Human-friendly name for the license (optional):
? Disclosure text (optional, press enter for default):
? Output file path: my-badge.svg

✅ Badge generated successfully: my-badge.svg
   License: MIT
   Size: medium
   Color: blue
```

## 🎨 Web Customization

Fill in the form fields:

- **Model Company**: e.g., "Anthropic", "OpenAI", "Google"
- **Model Name**: e.g., "Opus 4.5", "GPT-4", "Gemini Pro"
- **License** (optional): e.g., "MIT", "Apache 2.0"
- **Human Name** (optional): Your name or contributor name

Choose your style and gradient, then download as PNG or SVG!

## 💡 Usage Examples

### In a README

```markdown
# My Project

![Vibe Coded with Anthropic Opus 4.5](./badges/vibe-coded-display-blue.png)

This project was built with assistance from AI...
```

### In Documentation

Place a square badge in your docs sidebar, or use a QR code at the end of printed documentation.

### In Profile Pages

Add a banner badge to your GitHub profile or portfolio to show you embrace AI collaboration.

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript** - No build tools required
- **Canvas API** for badge rendering
- **QRCode.js** library for QR code generation
- **Responsive Design** - Works on mobile and desktop

## 📄 License

MIT License - Feel free to use, modify, and distribute these badges!

## 🤝 Contributing

Contributions welcome! Feel free to:
- Add new gradient themes
- Improve badge designs
- Add new badge styles
- Fix bugs or improve performance

## 🌟 Credits

Created by [Daniel Rosehill](https://danielrosehill.com) to promote transparency in AI-assisted development.

## 📬 Contact

- Website: [danielrosehill.com](https://danielrosehill.com)
- Email: public@danielrosehill.com
- GitHub: [@danielrosehill](https://github.com/danielrosehill)

---

**Made with 💜 for transparent AI collaboration**
