# VZCode

Real-time data visualization extension for Visual Studio Code with interactive dashboards and widgets.

## Overview

VZCode enables developers to stream and visualize data in real-time directly within VS Code. Built for debugging, monitoring, and exploring data from running applications.

### Planned Features

- 📊 **Interactive Dashboards** - Configurable grid-based layouts
- 📈 **Rich Widgets** - Line plots, scatter plots, tables, and more
- 🔌 **WebSocket Ingestion** - Stream data from Python, Node.js, and other clients
- ⚡ **Real-time Updates** - Smooth rendering at high data rates
- 💾 **Persistent Configuration** - Git-shareable dashboard layouts

## Development Status

🚧 **Under Development** - This extension is currently being built. See the [GitHub Issues](https://github.com/thatdspguy/vzcode/issues) for the roadmap.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [VS Code](https://code.visualstudio.com/) (v1.85.0 or later)

### Development Setup

```bash
# Clone the repository
git clone https://github.com/thatdspguy/vzcode.git
cd vzcode

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Run linting
npm run lint
```

### Running the Extension

1. Open the project in VS Code
2. Press `F5` to launch the Extension Development Host
3. The extension will activate in the new VS Code window

## Project Structure

```
vzcode/
├── src/               # Extension source code
│   └── extension.ts   # Extension entry point
├── out/               # Compiled JavaScript output
├── package.json       # Extension manifest
├── tsconfig.json      # TypeScript configuration
└── .eslintrc.json     # ESLint configuration
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run compile` | Compile TypeScript to JavaScript |
| `npm run watch` | Watch mode compilation |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## Contributing

Contributions are welcome! Please see the [GitHub Issues](https://github.com/thatdspguy/vzcode/issues) for planned work.

## License

Copyright (c) 2026 Keaton Scheible. See [LICENSE](LICENSE) for details.
