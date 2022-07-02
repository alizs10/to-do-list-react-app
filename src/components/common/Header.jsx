import React from 'react';
import {Link} from 'react-router-dom';


function Header() {

    return (
        <div className='header row-head'>
            <Link to='/' className='text-size-titr mr-1'>
                <i className="fa-solid fa-list-check ml-1"></i>
                لیست کارهای روزانه <span className='text-size-small text-danger'>(1.0.0)</span></Link>
            <Link to='/about' className='text-size-titr ml-1'>
                <i className="fa-solid fa-circle-info"></i>
            </Link>
        </div>
    );
}

export default Header;