import React from 'react';



function Note({ note, isDone, type, date, changeStatus, deleteNote, editNoteProvide }) {


    

    let done = null;

    if (isDone) {
        done = 'done';
    }
    return (
        <div className='note-container'>
            <div className={'note bg-' + type + ' ' + done} onClick={changeStatus}>
                <span className='text-size-small text-info'>{date}</span>
                <p>{note}</p>

            </div>
            <button className='button-warning editBtn' onClick={editNoteProvide}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='button-danger deleteBtn' onClick={deleteNote}>
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    );
}

export default Note;