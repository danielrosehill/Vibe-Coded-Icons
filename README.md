# 🤖 Is Vibe Coded!

**A friendly, transparent way to disclose AI assistance in your projects.**

Not just a badge generator—this is about fostering transparency and trust in AI-assisted development. Easily add beautiful badges and disclosure notes that tell users which AI models helped create your code, maintaining open collaboration and honesty in the development community.

## 🎯 Purpose

In the spirit of open collaboration and transparency, we believe developers should proudly disclose when AI tools have been used in their projects. Whether it's Claude, GPT, Gemini, or other models—transparency builds trust and helps others understand how your project was created.

This tool makes it effortless to:
- **Disclose AI usage honestly** with beautiful, professional badges
- **Share model information** so others know exactly what AI contributed
- **Build trust** with your users and the open source community
- **Normalize AI transparency** in software development

## ✨ Features

### 🎯 Transparency First
- **One-Command Setup**: `npx is-vibe-coded` adds badge + disclosure to any repo
- **Model Disclosure**: Clearly specify which AI company and model you used
- **Flexible Placement**: Choose where badge and note appear (header/footer/skip)
- **Disclosure Presets**: Professional, casual, or custom transparency messages
- **Human Attribution**: Acknowledge human contributors alongside AI

### 🎨 Beautiful Badges
- **Multiple Styles**: Display, Banner, Square, and QR Code variants
- **6 Color Themes**: Blue, Purple, Green, Orange, Red, and Gray gradients
- **Scalable SVG**: Vector format that looks perfect at any size
- **Smart Layouts**: Badge adapts based on which information you provide

### 🛠️ Developer Friendly
- **Zero Config**: Works out of the box with sensible defaults
- **CLI & Module**: Use as command-line tool or Node.js library
- **Web Interface**: Also available as interactive web app
- **Git Ready**: Automatically prepares files for commit

## 🚀 Quick Start

### ⚡ Super Quick: One-Command Setup

The fastest way to add an AI transparency badge to your repository:

```bash
npx is-vibe-coded
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
npm install -g is-vibe-coded
```

Then run in any repository:
```bash
is-vibe-coded
```

Or use the alternative commands:
```bash
vibe-coded-icons
# or the shortest alias
vci
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
3. **Flexible README Injection**: You choose where to add content
   - Badge location: Header, Footer, or Skip
   - Disclosure note: Header, Footer, or None
   - Finds existing README.md (case-insensitive)
   - Creates README.md if none exists
4. **AI Transparency Note**: Optional detailed disclosure section with:
   - AI model information
   - License details
   - Human contributor acknowledgment
5. **Git Ready**: Outputs next steps for committing and pushing

### Example Session

```bash
$ npx is-vibe-coded

🎨 Vibe-Coded Icons - Quick Setup for Your Repository

This will generate an AI transparency badge and add it to your README.

? 🤖 Which AI company created the model? Anthropic
? 🤖 Which AI model did you use? Claude Opus 4.5
? 💬 Choose disclosure text style: AI-Generated Code (default)
? 📄 Which license did you use? MIT
? 👤 Your name (human contributor, optional): Daniel Rosehill
? 📏 What size badge would you like? medium
? 🎨 What color would you like? blue
? 📍 Where should the badge be placed? Header (after first heading)
? 📝 Add a disclosure note to README? Yes, add note to footer

✅ Badge generated: vibe-coded-badge.svg
   Model: Anthropic Claude Opus 4.5
   Disclosure: AI-Generated Code
   License: MIT
   Size: medium
   Color: blue

📄 Found existing README.md
✅ Badge added to header of README.md
✅ Disclosure note added to footer of README.md

🎉 All done! Your repository now has an AI transparency badge.

Next steps:
  1. Review README.md to see the badge and disclosure note
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

## 💭 Philosophy

AI is transforming how we write code, and that's something to celebrate—not hide. By being transparent about AI assistance, we:

- **Build trust** with users who deserve to know how their tools were made
- **Share knowledge** about what AI can (and can't) do well
- **Normalize collaboration** between humans and AI
- **Encourage honesty** in an industry that values openness

This isn't about shame or disclaimer—it's about pride in using the best tools available while being honest about our process.

## 📬 Contact

- Website: [danielrosehill.com](https://danielrosehill.com)
- Email: public@danielrosehill.com
- GitHub: [@danielrosehill](https://github.com/danielrosehill)

---

**Made with 💜 for transparent AI collaboration**
