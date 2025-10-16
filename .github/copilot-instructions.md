# Copilot Instructions for mini-blog-react

This project is a minimal React application scaffolded for experimentation or as a starting point for a blog-like SPA. The codebase currently contains only the basic structure and dependencies, with no implemented components or business logic.

## Architecture Overview
- **Frontend Only**: The project is a single-page React app, with entry points in `src/main.jsx` and `src/App.jsx`.
- **Build Tool**: Uses Vite for fast development and builds. No custom Vite config is present yet.
- **Styling**: Tailwind CSS is included via dependencies, but no styles or configuration files are present yet.
- **No Backend**: There is no server-side code or API integration at this stage.

## Key Files & Structure
- `src/App.jsx`: Intended as the main React component. Currently empty.
- `src/main.jsx`: Intended as the React entry point. Currently empty.
- `src/index.html`: HTML template for Vite. Currently empty.
- `package.json`: Lists dependencies (`react`, `react-dom`, `vite`, `tailwindcss`, `postcss`, `autoprefixer`).

## Developer Workflows
- **Start Dev Server**: Use Vite's default command:
  ```sh
  npx vite
  ```
- **Build for Production**: Use Vite's build command:
  ```sh
  npx vite build
  ```
- **Testing**: No test framework is set up. The `test` script is a placeholder.
- **Styling**: Tailwind CSS is installed, but not yet configured or used in any file.

## Project-Specific Conventions
- No custom conventions or patterns are present yet. Follow standard React and Vite practices.
- All code should be placed in the `src/` directory.
- Use functional React components and hooks.

## Integration Points
- No external APIs or services are integrated yet.
- Tailwind CSS, PostCSS, and Autoprefixer are available for styling, but require configuration and usage in components.

## How to Extend
- Add React components to `src/App.jsx` and import them as needed.
- Configure Tailwind CSS by creating a `tailwind.config.js` and importing Tailwind in your CSS entry point.
- Add tests and update the `test` script in `package.json`.

## Example: Adding a Component
```jsx
// src/App.jsx
import React from 'react';

function App() {
  return <div className="p-4">Hello, Mini Blog!</div>;
}

export default App;
```

---
If any conventions or workflows change, update this file to keep AI agents productive.
