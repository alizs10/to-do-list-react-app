import React from 'react';

const Color = ({ color, selectedColor, changeSelectedColor }) => {

    
    var className = 'color-box bg-'+color;
    if (color == selectedColor) {
        className += ' color-selected';
    }

    return ( 
        <div className={className} value={color} onClick={event => changeSelectedColor(event)}></div>
     );
}
 
export default Color;