export const toggleWindow = (mode, type) => {
    return async dispatch => {
        await dispatch({type: "TOGGLE_WINDOW", payload: [mode, type]})
    }
}