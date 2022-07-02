import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Note from './Note';
import {deleteNote, changeStatus} from './../../Actions/Notes';
import { setNote } from '../../Actions/Note';
import { toggleWindow } from '../../Actions/InputWindow';


function Notes() {

    const notes = useSelector(state => state.notes);
    const dispatch = useDispatch();
    let reverseNotes = [...notes].reverse();
    

    let editNoteProvide = id => {

        var noteIndex = notes.findIndex(n => n.id === id);
        var noteIsEditing = notes[noteIndex];
        dispatch(setNote(noteIsEditing))
        dispatch(toggleWindow(true))
   
    }


    return (
        <div className='notes'>
            <div className='container'>
                <div className='d-flex flex-wrap flex-gap-2'>

                    {reverseNotes.map(note => (
                        <Note
                            key={note.id}
                            note={note.note}
                            isDone={note.status}
                            type={note.type}
                            date={note.date}
                            changeStatus={() => dispatch(changeStatus(note.id))}
                            deleteNote={() => dispatch(deleteNote(note.id))}
                            editNoteProvide={() => editNoteProvide(note.id)}
                        />
                    ))}


                </div>
            </div>
        </div>
    );
}

export default Notes;