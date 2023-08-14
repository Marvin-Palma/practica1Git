import React from 'react';
import './positiveButton.css';
import 'animate.css';

function positiveButton({label, buttonClass}){
    return(
        <button className={`animate__animated animate__flash ${buttonClass}`}>{label}</button>
    );
}

export default positiveButton;