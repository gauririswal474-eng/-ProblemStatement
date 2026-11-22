# Responsive Navbar (React + Vite)

A responsive navigation bar based on the supplied assignment reference.

## Requirements
- Node.js 18 or newer
- npm

## Run locally
1. Extract the ZIP folder.
2. Open the extracted `responsive-navbar-react` folder in VS Code.
3. Open the terminal in VS Code.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Create a production build
```bash
npm run build
```
The production files are created in the `dist` folder.

## Responsive behaviour
- Desktop (1024px and wider): white horizontal navbar with logo, four links and Create Account.
- Tablet (768px–1023px): green horizontal panel with an X close control.
- Mobile (up to 767px): full-screen green vertical menu, centered links and Create Account at the bottom.

## Deployment
You can deploy the project using Vercel, Netlify or GitHub Pages. For Vercel or Netlify, import the project/repository and use `npm run build` as the build command and `dist` as the output directory.
