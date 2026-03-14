# CSS Gallery Portfolio

A modern portfolio project showcasing creative CSS designs and interactive galleries, built with React, TypeScript, Vite, and Sass.

## Features
- Multiple themed pages (Ewok, Pikachu, Stargate, etc.)
- Custom dropdown menu component
- Responsive layouts and animations
- Modular SCSS styling

## Project Structure
```
index.html
package.json
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
src/
  App.scss
  App.tsx
  index.scss
  main.tsx
  variables.scss
  vite-env.d.ts
  assets/
    GitHubIcon.tsx
  components/
    DropDownMenu.scss
    DropDownMenu.tsx
  pages/
    Ewok.scss
    Ewok.tsx
    Home.scss
    Home.tsx
    NotFound.scss
    NotFound.tsx
    Pikachu.scss
    Pikachu.tsx
    Stargate.scss
    Stargate.tsx
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd css-gallery
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project
Start the development server:
```bash
npm run dev
# or
yarn dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production
To build the project for production:
```bash
npm run build
# or
yarn build
```
The output will be in the `dist/` folder.

### Linting
To check code quality:
```bash
npm run lint
# or
yarn lint
```

## Customization
- Add new pages in `src/pages/`
- Update styles in SCSS files under `src/`
- Modify components in `src/components/`

## License
MIT

---
For questions or feedback, open an issue or contact the project maintainer.