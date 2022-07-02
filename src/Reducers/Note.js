export const NoteReducer = (state = {type: "info"}, action) => {
    switch (action.type) {
        case "SET_NOTE_VALUE":
            return { ...state, note: action.payload };
            break;

        case "SET_NOTE_TYPE":
            return { ...state, type: action.payload };
            break;

        case "SET_NOTE":
            return action.payload;
            break;

        case "CLEAR_NOTE":
            return {};
            break;

        default:
            return state;
            break;
    }
}