import React from 'react';
import Square from './Square';
import './boardStyle.scss';

function Board ({
    squares,
    onClick,
}) {

    return (
        <div className="tablero">
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    );
}


export default Board;