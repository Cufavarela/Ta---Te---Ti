import React from 'react';
import './squareStyle.scss';


function Square ({
    value,
    onClick,
    ...props
}) {

    return (
        <button onClick={ onClick } className="square">
            { value }
        </button>
    );
}

export default Square;

