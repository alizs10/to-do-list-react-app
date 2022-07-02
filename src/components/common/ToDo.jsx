import React, { Fragment, useContext } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Message from '../Messages/Message';
import Notes from '../Notes/Notes';
import Footer from './Footer';
import InputWindow from '../InputWindow/InputWindow';
import DataContext from '../Context/DataContext';
import { useSelector } from 'react-redux';

const ToDo = () => {

    const { getNotes, noteDone, deleteNote, getDoUserNeedInput, setNoteType, getInputValue } = useContext(DataContext);

    const notes = useSelector(state => state.notes);
    const doUserNeedInputWindow = useSelector(state => state.inputWindow);
    return (
        <Fragment>
            {notes.length === 0 ? (<Message />) : null}
            <Notes notes={getNotes} noteDone={noteDone} deleteNote={deleteNote} />
            {doUserNeedInputWindow[0] ? (<InputWindow setNoteType={setNoteType} type={doUserNeedInputWindow[1]} inputValue={getInputValue} />) : null}
            <Footer />
            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={true}
                pauseOnFocusLoss
                pauseOnHover
            />
        </Fragment>
    );
}

export default ToDo;