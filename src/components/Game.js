import React, { useState } from 'react';
import calculateWinner from '../helpers';
import Board from './Board';
import './gameStyle.scss';



function Game () {

    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState (true);
    const winner = calculateWinner(board);

    const mensaje = winner ? "visible" : "invisible";
    const msjBoton = winner ? "Jugar de Nuevo" : "Jugar!!";

    const handleClick = (i) => {
        const boardCopy = [...board];
        if (winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    const restarGame = () => (
        <button className="botonRestart" onClick={() => setBoard(Array(9).fill(null))}>
            { msjBoton }
        </button>
    )

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div className="resultado">
                <p className={ mensaje }>{'El ganador es: ' + winner}</p>
                {restarGame()}
            </div>
        </>
    );
}

export default Game;