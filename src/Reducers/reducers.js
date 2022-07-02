import { combineReducers } from "redux";
import { InputWindowReducer } from "./InputWindow";
import { NoteReducer } from "./Note";
import { NotesReducer } from "./Notes";

export const reducers = combineReducers(
    {
        note: NoteReducer,
        notes: NotesReducer,
        inputWindow: InputWindowReducer
    }
)