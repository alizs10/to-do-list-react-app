export const setNoteValue = value => {
    return async (dispath, getState) => {
        await dispath({ type: "SET_NOTE_VALUE", payload: value })
    }
}

export const setNoteType = value => {
    return async dispath => {
        await dispath({ type: "SET_NOTE_TYPE", payload: value })
    }
}

export const setNote = note => {
    return async dispath => {
        await dispath({ type: "SET_NOTE", payload: note })
    }
}

export const clearNote = () => {
    return async (dispath) => {
        await dispath({type: "CLEAR_NOTE"})
    }
}