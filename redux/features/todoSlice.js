import { createSlice } from "@reduxjs/toolkit";


// For testing purposes

const jsonList =
  '[{"id":58,"description":"Listen Whitemane\'s  hewed Ring of Instinct","title":"Precious Bane"},{"id":59,"description":"Preside Maccius\'s  attended Windshear","title":"Gone with the Wind"},{"id":60,"description":"Burst The Man\'s  severed Elven Warhammer","title":"That Good Night"},{"id":67,"description":"Solve Rarnis\'s  froze Necromancer Amulet","title":"No Country for Old Ladies"},{"id":63,"description":"Consort Mallory\'s  repeated Gold and Ruby Circlet","title":"The Last Friend"},{"id":66,"description":"Capture The Lesser\'s ","title":"The kidneys Is a Lonely Hunter"},{"id":73,"description":"Note","title":"Outra"},{"id":72,"description":"hahahah","title":"Nova nota"},{"id":74,"description":"sada\\n\\nsadads","title":"Haha"},{"id":75,"description":"Impinge Rarnis\'s  scabbled Grosta\'s Necklace","title":"Tiger! Tiger!"},{"id":76,"description":"Horrify The Man\'s  behaved Elven Dagger","title":"Down to a Sunless Sea"},{"id":77,"description":"Wander Septim\'s  confused Froki\'s Bow","title":"I Will Fear No Evil"},{"id":78,"description":"Refuse Imyan\'s  immured The Woodsman\'s Friend","title":"An Instant In The Wind"},{"id":79,"description":"Solicit gro-Shub\'s  landed Honed Ancient Nord Battle Axe","title":"Arms and the Man"},{"id":80,"description":"Cycle Septim\'s  stemmed Forsworn Sword","title":"Taming a Sea Horse"},{"id":81,"description":"Train The Man\'s  hurried Amulet of Stendarr","title":"Blood\'s a Rover"},{"id":82,"description":"Belong Twice-Killed\'s  contributed Dawnguard Rune Hammer DG","title":"Clouds of Witness"},{"id":83,"description":"Frame Endell\'s  repeated Ring of the Erudite","title":"Surprised by Joy"},{"id":84,"description":"Construe Imyan\'s  swayed Dragonbone Warhammer DG","title":"A Confederacy of Dunces"},{"id":85,"description":"Collect The Fist\'s  crept Ring of Pure Mixtures","title":"Great Work of Time"},{"id":86,"description":"Expand The Fleet\'s  suffered Steel Sword","title":"The Widening Gyre"},{"id":87,"description":"Carry The Man\'s  shod Ring of Namira","title":"Jacob Have I Loved"},{"id":88,"description":"Detach Signus\'s  closed Glass Sword","title":"Frequent Hearses"},{"id":89,"description":"Impede Black-Briar\'s  grew Calcelmo\'s Ring","title":"Great Work of Time"},{"id":90,"description":"Inculcate The Man\'s  yawned Fjotli\'s Silver Locket","title":"The Wind\'s Twelve Quarters"},{"id":91,"description":"Savvy Gray-Mane\'s  escaped Shagrol\'s Warhammer","title":"That Good Night"},{"id":92,"description":"Befall Frey\'s  paid Jeweled Amulet","title":"From Here to Eternity"},{"id":93,"description":"Ring The Haggard\'s  chipped Silver Garnet Ring","title":"The Way Through the Woods"},{"id":94,"description":"Cash The Lion\'s  moulded Shagrol\'s Warhammer","title":"Noli Me Tangere"},{"id":95,"description":"Solve gro-Shub\'s  cribbed Grosta\'s Necklace","title":"An Acceptable Time"},{"id":96,"description":"Beautify Battle-Born\'s  looked Drainspell Bow","title":"Consider the Lilies"},{"id":97,"description":"Cast Gatharian\'s  inherited Amulet of Zenithar","title":"After Many a Summer Dies the Swan"},{"id":98,"description":"Survey Septim\'s  flashed Dragonbone Battleaxe DG","title":"Edna O\'Brien"}]';


const initialState = {
  todoList: JSON.parse(jsonList),
  currentNote: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    setCurrentNote: (state, action) => {
      state.currentNote = action.payload;
    },
  },
});

export const { setCurrentNote } = todoSlice.actions;
export const { saveTodo } = todoSlice.actions;

export const selectCurrentNote = (state) => state.todos.currentNote;
export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
