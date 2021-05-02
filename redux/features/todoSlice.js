import { createSlice } from "@reduxjs/toolkit";
// Dummy data


const lastId = (todos) =>
  todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 1);

// End of dummy data

const initialState = {
  todoList: [], // JSON.parse(jsonList),
  currentTitle: "",
  currentDescription: "",
  activeNote: {},
  pressedAmount: 0,
};





const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    incrementPressedAmount: (state, action) => {
      state.pressedAmount = state.pressedAmount + 1
    },
    decrementPressedAmount: (state, action) => {
      state.pressedAmount = state.pressedAmount - 1
    },
    resetPressedAmount: (state, action) => {
      state.pressedAmount = 0;
    },
    loadTodoList: (state, action) => {
      state.todoList = action.payload;
    },
    saveTodo: (state, action) => {
      state.todoList.push(action.payload); // All notes
    },
    setCurrentTitle: (state, action) => {
      // What is currently written on the screen
      state.currentTitle = action.payload;
    },
    setCurrentDescription: (state, action) => {
      // What is currently written on the screen
      state.currentDescription = action.payload;
    },
    setActiveNote: (state, action) => {
      // Which note was clicked and is now showing on NoteScreen
      state.currentTitle = action.payload.title;
      state.currentDescription = action.payload.description;
      state.activeNote = action.payload;
    },
    deleteActiveNote: (state, action) => {
      const filteredNotes = state.todoList.filter(
        (note) => note.id !== state.activeNote.id
      );
      state.todoList = [...filteredNotes];
    },
    updateActiveNote: (state, action) => {
      if (!state.currentDescription && !state.currentTitle) return; // Don't save if note is empty
      if (
        state.activeNote.description === state.currentDescription &&
        state.activeNote.title === state.currentTitle
      )
        return; // Don't save if no changes were made

      // Gives an ID if the current note does not have one yet
      if (!state.activeNote.id) {
        state.activeNote.id = lastId(state.todoList) + 1;
      }
      const filteredNotes = state.todoList.filter(
        (note) => note.id !== state.activeNote.id
      );
      state.todoList = [
        {
          id: state.activeNote.id,
          title: state.currentTitle,
          description: state.currentDescription,
        },
        ...filteredNotes,
      ];
    },
  },
});

export const { setCurrentTitle } = todoSlice.actions;
export const { setCurrentDescription } = todoSlice.actions;
export const { setActiveNote } = todoSlice.actions;
export const { updateActiveNote } = todoSlice.actions;
export const { deleteActiveNote } = todoSlice.actions;
export const { saveTodo } = todoSlice.actions;
export const { loadTodoList } = todoSlice.actions;
export const { incrementPressedAmount } = todoSlice.actions;
export const { decrementPressedAmount } = todoSlice.actions;
export const { resetPressedAmount } = todoSlice.actions;


export const selectCurrentTitle = (state) => state.todos.currentTitle;
export const selectCurrentDescription = (state) =>
  state.todos.currentDescription;
export const selectActiveNote = (state) => state.todos.activeNote;
export const selectTodoList = (state) => state.todos.todoList;
export const selectPressedAmount = (state) => state.todos.pressedAmount;

export default todoSlice.reducer;
