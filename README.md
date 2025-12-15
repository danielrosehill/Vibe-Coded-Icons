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

### Option 1: Use Online (GitHub Pages)

Visit: [https://danielrosehill.github.io/Vibe-Coded-Icons/](https://danielrosehill.github.io/Vibe-Coded-Icons/)

### Option 2: Run Locally

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

## 🎨 Customization

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
