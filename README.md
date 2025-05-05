# React Hooks Examples

This repository showcases practical examples of React hooks, demonstrating their functionality and usage in functional components. Each file focuses on a specific hook, providing clear and concise examples to help developers understand and implement React hooks effectively.

---

## Table of Contents
- [About React Hooks](#about-react-hooks)
- [Hooks Covered](#hooks-covered)
  - [useState](#usestate)
  - [useRef](#useref)
  - [useReducer](#usereducer)
  - [useEffect](#useeffect)
  - [useLayoutEffect](#uselayoutEffect)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [License](#license)
- [Author](#author)

---

## About React Hooks

React hooks are special functions that allow you to use state, manage side effects, and leverage other React features in functional components. They eliminate the need for class components, making code simpler and more reusable.

---

## Hooks Covered

### useState
The `useState` hook enables you to add and manage state in a functional component. It returns a state variable and a function to update it.

#### Example:
A counter that increments, decrements, or resets based on user interaction.

### useRef
The `useRef` hook creates a mutable reference that persists across renders without triggering re-renders. It’s commonly used to access or manipulate DOM elements.

#### Example:
Focusing an input field programmatically when a button is clicked.

### useReducer
The `useReducer` hook manages complex state logic, similar to Redux. It’s ideal for handling multiple state transitions or related state values.

#### Example:
A counter combined with a toggle to show or hide text.

### useEffect
The `useEffect` hook handles side effects, such as fetching data, updating the DOM, or subscribing to events, after a component renders.

#### Example:
A placeholder for implementing side effect logic (e.g., fetching data on component mount).

### useLayoutEffect
The `useLayoutEffect` hook is similar to `useEffect` but runs synchronously before the browser paints, making it suitable for DOM measurements or mutations.

#### Example:
Comparing `useLayoutEffect` with `useEffect` to demonstrate rendering differences.

---

## Project Structure

```
Hooks-in-React-js-main/
├── useState_hook.jsx          # Demonstrates useState with a counter
├── useRef_Hook.jsx            # Demonstrates useRef for DOM manipulation
├── useRender_hook.jsx         # Demonstrates useReducer for complex state
├── useEffect_hook.jsx         # Placeholder for useEffect examples
├── useLayoutEffect_hook.jsx   # Demonstrates useLayoutEffect vs useEffect
├── README.md                  # Project documentation
```

---

## How to Run

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Hooks-in-React-js-main
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

This will launch the project in your default browser, allowing you to interact with the hook examples.

---

## License

This project is a coursework submission and is not bound by a specific license.

---

## Author

Created by D. Naga Phanindra.
