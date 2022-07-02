import { createContext } from "react";

const DataContext = createContext({
    version: '',
    doUserNeedInput: [false, 'add'],
    noteTypeSelected: '',
    addNote: () => { },
    addValue: () => { },
    inputValue: () => { },
    setNoteType: () => { },
    selectValue: () => { },
    changeUserNeedInput: () => {},
});

export default DataContext;