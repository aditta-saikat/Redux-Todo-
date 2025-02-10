# Redux Todo Application

A comprehensive implementation of Redux state management demonstrated through a Todo application. This project showcases the fundamental concepts of Redux while providing a practical, real-world example.

## 🌟 Overview

Redux is a predictable state container for JavaScript applications. This project demonstrates Redux implementation in a React application through a simple Todo list, showing how to manage application state effectively using Redux's core principles.

## 🚀 Features

- Centralized state management using Redux
- Add and delete todo items
- Real-time state updates
- Redux DevTools integration for debugging
- Asynchronous actions support with Redux Thunk

## 🛠️ Technologies Used

- React
- Redux
- Redux Thunk
- Redux DevTools Extension
- Vite (Build Tool)

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [project-name]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── actions/
│   └── index.js           # Action creators
├── reducers/
│   ├── index.js           # Root reducer
│   └── taskReducer.js     # Task-specific reducer
├── components/
│   ├── Task.jsx          # Task input component
│   └── TaskList.jsx      # Task display component
├── store.js              # Redux store configuration
├── main.jsx             # Application entry point
└── App.jsx              # Root component
```

## 🔄 Redux Flow Implementation

### 1. Store
The central state container that holds the application's data:
```javascript
const store = createStore(
  taskReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
```

### 2. Actions
Payloads of information sent to the store:
```javascript
{
  type: "ADD_TASK",
  payload: {
    id: 1,
    text: "Sample task"
  }
}
```

### 3. Reducers
Pure functions that specify how state updates in response to actions:
```javascript
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    // ...other cases
  }
};
```

### 4. Dispatch
Method to send actions to the store:
```javascript
dispatch(addTodo("New Task"));
```

## 🔍 Redux DevTools

This project includes Redux DevTools integration for better debugging:
1. Install the Redux DevTools browser extension
2. Access the DevTools in your browser's developer tools panel
3. Monitor state changes and action dispatches in real-time

## 🎯 Key Concepts

- **Single Source of Truth**: All application state is stored in one central store
- **State is Read-Only**: State can only be changed by dispatching actions
- **Changes are Made with Pure Functions**: Reducers are pure functions that take the previous state and an action to return the next state

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📚 Additional Resources

- [Redux Documentation](https://redux.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)

---

Built with ❤️ using React and Redux
