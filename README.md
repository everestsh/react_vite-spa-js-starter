# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


```
1>
npm create vite@latest 
npm install -D jsdom vitest @testing-library/react @testing-library/jest-dom
npm run dev
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:everestsh/react_vite-spa-js-starter.git
git push -u origin main -f
```

```
2>
npm install -D jsdom vitest @testing-library/react @testing-library/jest-dom
touch vite.config.js
cd src
mkdir __test__
cd __test__
touch App.test.jsx
touch setupTests.jsx
```

```angular2html
touch LICENSE
cd ./src/docs
touch Vite-react-setup.md
```