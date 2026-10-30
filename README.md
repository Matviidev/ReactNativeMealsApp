# Meals

A small recipe browsing app built with Expo and React Native. Browse meals by category, view recipe details, and keep a list of favorites.

## Features

- Category grid with recipe counts
- Meal lists per category with duration, complexity and price level
- Meal details with ingredients, numbered steps and dietary badges
- Favorites toggled from the meal screen, shown in a dedicated screen
- Empty states for favorites, empty categories and missing meals
- Responsive layout: drawer on phones, persistent sidebar and multi-column grids on wide screens
- Drawer and stack navigation with a consistent dark theme and Inter typography

## Tech stack

- Expo SDK 57, React Native 0.86, React 19
- Expo Router (file-based stack and drawer navigation)
- Redux Toolkit and React Redux for favorites state
- expo-image and expo-symbols
- TypeScript (strict) and ESLint (eslint-config-expo)

## Project structure

```
src/
  app/          Routes (Expo Router)
  screens/      Screen components
  components/   Reusable UI
  constants/    Theme, icons and navigation options
  hooks/        Responsive layout hooks
  data/         Dummy data and query helpers
  store/        Redux store and favorites slice
  types/        Domain types
```

## Getting started

```bash
npm install
npm start
```

Then open the app in Expo Go, an Android emulator (`npm run android`), the iOS simulator (`npm run ios`) or the browser (`npm run web`).

## Scripts

- `npm run lint` - run ESLint
- `npm run typecheck` - run the TypeScript compiler
