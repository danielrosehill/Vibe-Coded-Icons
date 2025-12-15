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

### ⚡ Super Quick: One-Command Setup

The fastest way to add an AI transparency badge to your repository:

```bash
npx vibe-coded-icons is-vibe-coded
```

This single command will:
1. Run an interactive questionnaire
2. Generate a beautiful badge
3. Automatically inject it into your README.md
4. Create README.md if it doesn't exist

Perfect for quickly setting up transparency disclosure in any repository!

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

## ⚡ is-vibe-coded Command

The `is-vibe-coded` command is designed for **instant repository setup**. Instead of manually generating a badge and adding it to your README, this command does everything in one go.

### Installation

You can use it without installation via npx:
```bash
npx vibe-coded-icons is-vibe-coded
```

Or install globally and run:
```bash
npm install -g vibe-coded-icons
is-vibe-coded
```

### What It Does

1. **Interactive Setup**: Prompts you for badge preferences (license, size, color, etc.)
2. **Badge Generation**: Creates `vibe-coded-badge.svg` in your current directory
3. **README Injection**: Automatically adds the badge to your README.md
   - Finds existing README.md (case-insensitive)
   - Creates README.md if none exists
   - Inserts badge after the first heading for optimal placement
4. **Git Ready**: Outputs next steps for committing and pushing

### Example Session

```bash
$ npx vibe-coded-icons is-vibe-coded

🎨 Vibe-Coded Icons - Quick Setup for Your Repository

This will generate an AI transparency badge and add it to your README.

? Which license did you use? MIT
? What size badge would you like? medium
? What color would you like? blue
? Human-friendly name for the license (optional): Daniel Rosehill
? Disclosure text (optional, press enter for default):

✅ Badge generated: vibe-coded-badge.svg
   License: MIT
   Size: medium
   Color: blue

📄 Found existing README.md
✅ Badge reference added to README.md

🎉 All done! Your repository now has an AI transparency badge.

Next steps:
  1. Review README.md to see the badge
  2. Commit both README.md and vibe-coded-badge.svg to your repository
  3. Push to GitHub to display the badge
```

### Use Cases

- **New Projects**: Quickly add transparency disclosure when starting a repository
- **Existing Projects**: Retrofit AI disclosure into mature projects
- **Quick Documentation**: One command to document AI assistance
- **Team Onboarding**: Easy for team members to add disclosure to their repos

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
