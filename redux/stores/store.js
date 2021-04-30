import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

import thunkMiddleware from "redux-thunk"

export default configureStore({
  reducer: {
    todos: todoReducer
  },
  middleware: [thunkMiddleware]
})
