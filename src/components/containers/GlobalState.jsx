import React, { Fragment } from 'react';

const GlobalState = props => {

    // const context = useContext(DataContext);
    // const [cookies, setCookie, removeCookie] = useCookies('user-cookies');

    // var notes = cookies.notes === undefined ? [] : cookies.notes;


    return (

        <Fragment>
            {props.children}
        </Fragment>

    );
}

export default GlobalState;