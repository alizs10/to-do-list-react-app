import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleWindow } from './../../Actions/InputWindow'

const Footer = () => {

    const dispath = useDispatch();
    return (
        <div className='footer'>

            <button className='footer-btn' onClick={() => dispath(toggleWindow(true, "add"))}>
                <i className="fa-solid fa-plus"></i>
            </button>

        </div>
    );
}

export default Footer;