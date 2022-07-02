import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWindow } from '../../Actions/InputWindow';
import { setNoteValue, setNoteType } from '../../Actions/Note';
import { addNote, editNote } from '../../Actions/Notes';
import DataContext from '../Context/DataContext';
import Color from './Color';

const InputWindow = () => {

    var colors = [
        { id: 1, colorname: 'danger' },
        { id: 2, colorname: 'success' },
        { id: 3, colorname: 'primary' },
        { id: 4, colorname: 'info' },
        { id: 5, colorname: 'warning' },
    ];

    const dispatch = useDispatch();

    const note = useSelector(state => state.note);
    const inputWindowType = useSelector(state => state.inputWindow);

    let changeSelectedColor = (event) => {
        dispatch(setNoteType(event.target.getAttribute('value')))
    }

    let btn, textarea;

    if (inputWindowType[1] === 'add') {
        textarea = <textarea type="text" onChange={(event) => dispatch(setNoteValue(event.target.value))} placeholder='اینجا بنویس ...' />
        btn = <button onClick={() => dispatch(addNote(note))}>ثبت</button>;
    } else {
        textarea = <textarea type="text" onChange={(event) => dispatch(setNoteValue(event.target.value))} value={note.note} placeholder='اینجا بنویس ...' />
        btn = <button className={'bg-warning'} onClick={() => dispatch(editNote(note))}>ویرایش</button>;
    }



    return (
        <div>
            <div className='input-window'>
                <div className='input'>
                    {textarea}
                </div>

                <div className='color-select-box'>

                    {colors.map(color => (
                        <Color key={color.id} color={color.colorname} selectedColor={note.type} changeSelectedColor={changeSelectedColor} />
                    ))}


                </div>

                <div className='input-window-btns'>
                    <button onClick={() => dispatch(toggleWindow(false))}>لغو</button>
                    {btn}
                </div>
            </div>
            <div className="shadow"></div>
        </div>
    );
}

export default InputWindow;