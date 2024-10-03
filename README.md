# Falcon Shield Web

## Install dependencies & run the project
```bash
npm install
npm run dev
```

## Structure
Templates consists of a couple folders, demos and layout have been separated so that you can easily remove what is not necessary.

- `src/layout`: Main layout files, needs to be present.
- `src/views`: Demo pages like Dashboard.
- `public/demo`: Assets used in demos
- `src/assets/demo`: Styles used in demos
- `src/assets/layout`: SCSS files of the main layout

## Menu
Main menu is defined at `src/layout/AppMenu.vue` file. Update the `model` property to define your own menu items.

## Layout Composable
The `src/layout/composables/layout.js` is a composable that manages the layout state changes including dark mode, PrimeVue theme, menu modes and states. If you change the initial values like the preset or colors, make sure to apply them at PrimeVue config at main.js as well.

## Tailwind CSS
The demo pages are developed with Tailwind CSS however the core application shell mainly uses custom CSS.

## Variables
CSS variables used in the template derive their values from the PrimeVue styled mode presets, use the files under `assets/layout/_variables.scss` to customize according to your requirements.