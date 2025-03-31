# Friends Manager – React + Vite + Flask + Chakra UI

A simple yet elegant fullstack application to manage a directory of your friends or teammates. Built with **React** (via Vite), **Chakra UI** for styling, and **Flask** as the backend REST API.

---

## Screenshots

<p align="center">
  <img src="public/photo1.png" alt="No Friends Yet" width="600"/>
  <br>
  <em>No friends yet – Empty state message</em>
</p>

<p align="center">
  <img src="public/photo2.png" alt="Friend Card Added" width="600"/>
  <br>
  <em>Friend card added with role, description, and avatar</em>
</p>

<p align="center">
  <img src="public/photo3.png" alt="Edit Friend Modal" width="600"/>
  <br>
  <em>Edit modal for updating user details</em>
</p>

<p align="center">
  <img src="public/photo4.png" alt="Create Friend Modal" width="600"/>
  <br>
  <em>Modal for creating a new contact</em>
</p>

<p align="center">
  <img src="public/photo5.png" alt="Friend Created Successfully" width="600"/>
  <br>
  <em>Toast message after successfully creating a contact</em>
</p>

<p align="center">
  <img src="public/photo6.png" alt="Friend List" width="600"/>
  <br>
  <em>Friend list view with multiple user cards</em>
</p>

---

# Friends Manager – React + Vite + Chakra UI

## Project Intent

This project was created as an experimental learning tool. The main goals were:

- Compare **React** and **Vue.js** syntax
- Explore how **Flask** integrates with a **React** frontend
- Practice fullstack development using modern tools

For a direct syntax comparison between React and Vue, see the **"React vs Vue Syntax Comparison"** section below.

---

## Project Overview

A frontend interface for managing friend profiles. Built with **React** using **Vite** for fast builds and **Chakra UI** for clean, accessible components. It interacts with a Flask backend to perform CRUD operations on friends.

---

## Features

- Fast startup and HMR with Vite
- Responsive UI using Chakra
- Modular, component-based architecture
- REST API communication with Flask backend
- Dark/Light mode toggling
- Form validation and user feedback with Chakra components

---

## FT Structure

```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CreateUserModal.jsx
│   │   ├── EditModal.jsx
│   │   ├── UserCard.jsx
│   │   └── UserGrid.jsx
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

### Backend stucture u will find in backend folder

---

## Component Overview

### Navbar.jsx
- Top navigation bar with app title
- Includes theme toggle and a button to open the "Create User" modal

### CreateUserModal.jsx
- Chakra modal form to create a new friend
- Uses `POST` to backend

### EditModal.jsx
- Modal to update existing user data
- Uses `PATCH` to backend

### UserCard.jsx
- Displays friend’s name, role, avatar, and description
- Includes edit and delete actions

### UserGrid.jsx
- Lays out all `UserCard`s in a responsive grid

---

## React vs Vue Syntax Comparison

| Concept               | React (JSX)                                    | Vue (Template Syntax)                     |
|-----------------------|-----------------------------------------------|-------------------------------------------|
| Component Definition  | `function Component() { return <div /> }`     | `<template><div></div></template>`        |
| Data Binding          | `value={state}`                                | `:value="state"`                          |
| Event Handling        | `onClick={handleClick}`                        | `@click="handleClick"`                    |
| Conditional Rendering | `{isOpen && <Modal />}`                        | `v-if="isOpen"`                           |
| Props Access          | `props.name`                                   | `props: ['name']`                         |
| Styling               | Chakra props or `style={{}}`                   | Inline `:style` or class bindings         |

---

## Key Differences: React vs Vue

| Feature                 | React                                          | Vue                                       |
|------------------------|------------------------------------------------|-------------------------------------------|
| Syntax Style           | JavaScript + JSX                               | HTML + Directives                         |
| Learning Curve         | Moderate                                       | Easier for HTML/CSS beginners             |
| State Management       | `useState`, `useReducer`, Context, Redux       | `ref()`, `reactive()`, Vuex               |
| Routing                | `react-router-dom`                             | `vue-router`                              |
| Styling Approach       | Chakra UI / CSS-in-JS                          | Scoped styles / class binding             |
| Ecosystem Flexibility  | Easily embeddable                              | Best used as part of full Vue apps        |
| Performance            | Highly optimized with virtual DOM             | Optimized using Vue's reactivity system   |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

- Frontend: `http://localhost:3000`
- Backend: `http://127.0.0.1:5000`

---

## Developer Notes

- Chakra UI simplifies layout, spacing, theming, and form components.
- Use `useEffect()` for fetching data on mount.
- Manage state using `useState()` in functional components.
- Use `useToast()` for in-app feedback messages.

---

## References

- [Vite Documentation](https://vitejs.dev)
- [React Docs](https://reactjs.org)
- [Chakra UI](https://chakra-ui.com)
- [Flask Backend](../backend/README.md)
