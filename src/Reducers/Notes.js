export const NotesReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return action.payload;
            break;

        case "UPDATE_NOTE":
            return action.payload;
            break;

        case "DELETE_NOTE":
            return action.payload;
            break;

        case "CHANGE_STATUS":
            return [...action.payload];
            break;

        default:
            return state;
            break;
    }
}