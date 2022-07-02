export const InputWindowReducer = (state = [false, "add"], action) => {

    switch (action.type) {
        case "TOGGLE_WINDOW":
            return [action.payload[0], action.payload[1]];
            break;
            

            default:
                return state;
                break;
    }

}