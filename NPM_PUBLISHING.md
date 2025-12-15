# Publishing to NPM

## Prerequisites

1. Create an NPM account at [npmjs.com](https://www.npmjs.com/)
2. Login to NPM from command line:
   ```bash
   npm login
   ```

## Before Publishing

1. **Test the package locally**:
   ```bash
   npm install
   npm link
   vci --default
   npm unlink
   ```

2. **Check package contents**:
   ```bash
   npm pack --dry-run
   ```

3. **Update version** (if needed):
   ```bash
   npm version patch  # or minor, or major
   ```

## Publishing

### First Time Publish

```bash
npm publish
```

### Subsequent Updates

1. Make your changes
2. Update version:
   ```bash
   npm version patch  # 1.0.0 -> 1.0.1
   npm version minor  # 1.0.0 -> 1.1.0
   npm version major  # 1.0.0 -> 2.0.0
   ```
3. Publish:
   ```bash
   npm publish
   ```

## Verify Publication

After publishing, verify at:
- https://www.npmjs.com/package/vibe-coded-icons

Test installation:
```bash
npm install -g vibe-coded-icons
vci --default
```

## Package Scope

If you want to publish under a scope (e.g., @danielrosehill/vibe-coded-icons):

1. Update package.json:
   ```json
   "name": "@danielrosehill/vibe-coded-icons"
   ```

2. Publish as public:
   ```bash
   npm publish --access public
   ```

## Troubleshooting

### Package name already exists
- Try a different name or use a scoped package
- Check availability: `npm search vibe-coded-icons`

### Version already exists
- Increment version: `npm version patch`

### Not logged in
- Run: `npm login`

## Post-Publishing

1. Add NPM badge to README:
   ```markdown
   [![npm version](https://badge.fury.io/js/vibe-coded-icons.svg)](https://www.npmjs.com/package/vibe-coded-icons)
   ```

2. Update documentation if needed
3. Create a GitHub release tag
4. Announce on social media/community
