import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';


import Header from './components/common/Header';
import About from './components/common/About';
import ToDo from './components/common/ToDo';


const App = () => {


    return (

        <Fragment>
            <Header />
            <Routes>
                <Route path='/' element={<ToDo />} />
                <Route path='/about' element={<About />} />
            </Routes>

        </Fragment>

    );
}

export default App;