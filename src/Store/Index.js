import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice.js";
import todoReducer from "./todoSlice.js"; // Импорт reducer, а не компонента

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todoReducer, // Используйте импортированный reducer, а не компонент
  },
});

export default store;