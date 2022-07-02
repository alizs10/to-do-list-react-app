import { toast } from "react-toastify";
import { generateNewID } from "../Services/services";
import { toggleWindow } from "./InputWindow";
import { clearNote, setNoteType, setNoteValue } from "./Note";

export const addNote = (note) => {

    return async (dispath, getState) => {

        if (note.note !== undefined && note.note.replace(/ /g, '') !== '') {

            note.id = generateNewID(getState().notes);
            note.status = false;

            var date = new Date();
            note.date = date.getHours() + ':' + date.getMinutes() + ' ' + date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();

            var notesInstance = [...getState().notes];
            notesInstance.push(note);
            await dispath({ type: "ADD_NOTE", payload: notesInstance })
            await dispath(clearNote());
            await dispath(setNoteType("info"));
            await dispath(toggleWindow(false));

            toast.success('کار جدید شما اضافه شد', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        } else {
            await dispath(toggleWindow(false));
            toast.error('کارتو ننوشتی خب :/', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }
    }
}



export const editNote = note => {

    return async (dispath, getState) => {

        if (note.note !== undefined && note.note.replace(/ /g, '') !== '') {
            var date = new Date();
            note.date = date.getHours() + ':' + date.getMinutes() + ' ' + date.getFullYear() + '-' + date.getMonth() + '-' + date.getDay();
            var notesInstance = [...getState().notes];
            var filteredNotesInstance = notesInstance.filter(n => n.id !== note.id);
            filteredNotesInstance.push(note);

            await dispath({ type: "UPDATE_NOTE", payload: filteredNotesInstance })
            await dispath(clearNote());
            await dispath(setNoteType("info"));
            await dispath(toggleWindow(false));
            
            toast.warn('کار شما ویرایش شد', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        } else {
            await dispath(toggleWindow(false));
            toast.warn('کارتو خالی گذاشتی عزیزم', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }

    }
}

export const deleteNote = (id) => {

    return async (dispath, getState) => {
        var notesInstance = [...getState().notes];
        var filteredNotesInstance = notesInstance.filter(n => n.id !== id);

        await dispath({ type: "DELETE_NOTE", payload: filteredNotesInstance })

        toast.error('کار شما حذف شد', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
        });
    }

}

export const changeStatus = (id) => {

    return async (dispath, getState) => {
        var notesInstance = [...getState().notes];
        var noteIndex = notesInstance.findIndex(n => n.id === id);
        var noteIsDone = notesInstance[noteIndex];
        noteIsDone.status = !noteIsDone.status;

        await dispath({ type: "CHANGE_STATUS", payload: notesInstance })


        if (noteIsDone.status) {
            toast.success('ایول، انجام شد :)', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        } else {
            toast.error('اشکال نداره، بلاخره انجامش میدی', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
            });
        }
    }

}