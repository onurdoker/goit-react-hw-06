# Phonebook (React + Redux Toolkit + Vite)

A simple phonebook application built with React and Redux Toolkit. Users can add contacts with validation, filter the
list by name, and delete contacts. Data is persisted to the browser's localStorage via `redux-persist` so your contacts
remain after page reloads.

## Overview

- Add new contacts using a form powered by Formik + Yup (validation):
    - Name: 3–50 letters (Latin/Turkish letters supported), capitalized automatically.
    - Phone: exactly seven digits; saved as XXX-XX-XX.
- Filter contacts by name (prefix match, case-insensitive).
- Delete contacts from the list.
- Contacts are sorted alphabetically by name and persisted in localStorage.

## Tech Stack

- Language: JavaScript (ESM)
- Framework/UI: React 19
- State: Redux Toolkit, React-Redux
- Persistence: redux-persist (localStorage)
- Forms & Validation: Formik, Yup
- Icons: react-icons
- Build Tool/Bundler: Vite (rolldown-vite 7)
- Linting: ESLint (eslint@9, react-hooks, react-refresh)
- Package Manager: npm (package-lock.json present)

## Requirements

- Node.js 18+ (recommended by Vite 7)
- npm 8+

## Getting Started

1. Install dependencies:
    - npm install
2. Start the dev server (with HMR):
    - npm run dev
    - Vite will print the local URL (typically http://localhost:5173).
3. Build for production:
    - npm run build
4. Preview the production build locally:
    - npm run preview
5. Lint the code:
    - npm run lint

## Scripts

Defined in package.json:

- dev: Start Vite dev server
- build: Build for production
- preview: Preview the production build
- lint: Run ESLint on the project

## Entry Points

- index.html: mounts the app and loads the module script `/src/main.jsx`.
- src/main.jsx: renders `<App />` into `#root`, sets up Redux Provider and PersistGate.
- src/App.jsx: top-level component that renders the Phonebook UI (ContactForm, SearchBox, ContactList).

## Environment Variables

- None are required for local development.
- Vite only exposes variables prefixed with `VITE_`.
- TODO: Document any future `VITE_*` variables here when introduced.

## Tests

- No tests are currently included in the repository.
- TODO: Add tests (recommended tooling: Vitest + React Testing Library) and document how to run them here.

## Project Structure

```
/ (repo root)
├─ README.md
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ index.html
├─ public/
├─ src/
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  ├─ main.jsx                # Entry module referenced by index.html
│  ├─ redux/
│  │  ├─ store.js            # Redux store + redux-persist configuration
│  │  ├─ contactsSlice.js    # Contacts slice (add/delete, initial demo items)
│  │  └─ filtersSlice.js     # Name filter slice
│  └─ components/
│     ├─ contact/            # Single contact item (delete)
│     │  ├─ Contacts.jsx
│     │  └─ Contacts.module.css
│     ├─ contactForm/        # Add contact form (Formik + Yup)
│     │  ├─ ContactForm.jsx
│     │  └─ ContactForm.module.css
│     ├─ contactList/        # List of contacts + sorting + empty state
│     │  ├─ ContactList.jsx
│     │  └─ ContactList.module.css
│     └─ searchBox/          # Filter input (Redux state)
│        ├─ SearchBox.jsx
│        └─ SearchBox.module.css
└─ eslint.config.js
```

## Data Persistence

- The contact slice is persisted with `redux-persist` using `localStorage`.
- Persist key: `contacts`, whitelist: `items`.
- Serializable checks are disabled via RTK middleware options due to persist.

## How It Works (Brief)

- ContactForm validates inputs and dispatches `addContact(name, number)` (RTK prepare callback adds an `id`).
- ContactList selects contacts and filter from Redux, applies a case-insensitive startsWith filter, sorts by name.
- Contacts component dispatches `deleteContact(id)` to remove an item.

## Known Limitations / TODOs

- No routing or server API; all data is local.
- No unit/integration tests yet. TODO: add Vitest + RTL.
- No environment configuration. TODO: define and document `VITE_*` vars when needed.
- No LICENSE file was found. TODO: choose and add a license (MIT, ISC, Apache-2.0, etc.).

## License

- TODO: Add a LICENSE file at the repo root and reference it here.
