import { createSlice } from "@reduxjs/toolkit";
import { axios } from "../../utils/axios";
import store from "../stores/store"
// Dummy data

const jsonList =
  '[{"id":58,"description":"Listen Whitemane\'s  hewed Ring of Instinct","title":"Precious Bane"},{"id":59,"description":"Preside Maccius\'s  attended Windshear","title":"Gone with the Wind"},{"id":60,"description":"Burst The Man\'s  severed Elven Warhammer","title":"That Good Night"},{"id":67,"description":"Solve Rarnis\'s  froze Necromancer Amulet","title":"No Country for Old Ladies"},{"id":63,"description":"Consort Mallory\'s  repeated Gold and Ruby Circlet","title":"The Last Friend"},{"id":66,"description":"Capture The Lesser\'s ","title":"The kidneys Is a Lonely Hunter"},{"id":73,"description":"Note","title":"Outra"},{"id":72,"description":"hahahah","title":"Nova nota"},{"id":74,"description":"sada\\n\\nsadads","title":"Haha"},{"id":75,"description":"Impinge Rarnis\'s  scabbled Grosta\'s Necklace","title":"Tiger! Tiger!"},{"id":76,"description":"Horrify The Man\'s  behaved Elven Dagger","title":"Down to a Sunless Sea"},{"id":77,"description":"Wander Septim\'s  confused Froki\'s Bow","title":"I Will Fear No Evil"},{"id":78,"description":"Refuse Imyan\'s  immured The Woodsman\'s Friend","title":"An Instant In The Wind"},{"id":79,"description":"Solicit gro-Shub\'s  landed Honed Ancient Nord Battle Axe","title":"Arms and the Man"},{"id":80,"description":"Cycle Septim\'s  stemmed Forsworn Sword","title":"Taming a Sea Horse"},{"id":81,"description":"Train The Man\'s  hurried Amulet of Stendarr","title":"Blood\'s a Rover"},{"id":82,"description":"Belong Twice-Killed\'s  contributed Dawnguard Rune Hammer DG","title":"Clouds of Witness"},{"id":83,"description":"Frame Endell\'s  repeated Ring of the Erudite","title":"Surprised by Joy"},{"id":84,"description":"Construe Imyan\'s  swayed Dragonbone Warhammer DG","title":"A Confederacy of Dunces"},{"id":85,"description":"Collect The Fist\'s  crept Ring of Pure Mixtures","title":"Great Work of Time"},{"id":86,"description":"Expand The Fleet\'s  suffered Steel Sword","title":"The Widening Gyre"},{"id":87,"description":"Carry The Man\'s  shod Ring of Namira","title":"Jacob Have I Loved"},{"id":88,"description":"Detach Signus\'s  closed Glass Sword","title":"Frequent Hearses"},{"id":89,"description":"Impede Black-Briar\'s  grew Calcelmo\'s Ring","title":"Great Work of Time"},{"id":90,"description":"Inculcate The Man\'s  yawned Fjotli\'s Silver Locket","title":"The Wind\'s Twelve Quarters"},{"id":91,"description":"Savvy Gray-Mane\'s  escaped Shagrol\'s Warhammer","title":"That Good Night"},{"id":92,"description":"Befall Frey\'s  paid Jeweled Amulet","title":"From Here to Eternity"},{"id":93,"description":"Ring The Haggard\'s  chipped Silver Garnet Ring","title":"The Way Through the Woods"},{"id":94,"description":"Cash The Lion\'s  moulded Shagrol\'s Warhammer","title":"Noli Me Tangere"},{"id":95,"description":"Solve gro-Shub\'s  cribbed Grosta\'s Necklace","title":"An Acceptable Time"},{"id":96,"description":"Beautify Battle-Born\'s  looked Drainspell Bow","title":"Consider the Lilies"},{"id":97,"description":"Cast Gatharian\'s  inherited Amulet of Zenithar","title":"After Many a Summer Dies the Swan"},{"id":98,"description":"Survey Septim\'s  flashed Dragonbone Battleaxe DG","title":"Edna O\'Brien"}]';

const lastId = (todos) =>
  todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 1);

// End of dummy data

const initialState = {
  todoList: [], // JSON.parse(jsonList),
  currentTitle: "",
  currentDescription: "",
  activeNote: {},
};


// Thunk function
 export const fetchTodoList =  (dispatch, getState) => {
fetch("https://polar-reaches-33143.herokuapp.com/api/v1/notes")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    store.dispatch(loadTodoList(data));
  })
  .catch((a) => console.log(a));

  return {type: "a",}
 }



const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
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

export const selectCurrentTitle = (state) => state.todos.currentTitle;
export const selectCurrentDescription = (state) =>
  state.todos.currentDescription;
export const selectActiveNote = (state) => state.todos.activeNote;
export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
