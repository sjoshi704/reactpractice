import React, { useEffect, useState } from 'react';
import "./TicTacToe.css";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));

    const [isXnext, setIsXNext] = useState(true)
    const [winner, setWinner] = useState(null)

    const handleClick = (index) => {
        if (board[index]) {
            return;
        }
        board[index] = isXnext ? "X" : "O";
        setIsXNext(!isXnext);
        setBoard([...board]);

    }
    useEffect(()=>{
        console.log("Calculating Winner");
        const winner =calCulateWinner(board);
        setWinner(winner);
        console.log("Winner is " + winner);

    },[board])
    const calCulateWinner = (square) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for(let i=0 ; i<lines.length ; i++){
            const [a,b,c]=lines[i];
            if(square[a] && square[a]===square[b] && square[a]===square[c]){
                return square[a];
            }
        }
    }

    return <>
        <div className='bg-warning text-white h4 font-weight-bold'>
            TicTacToe Application
        </div>
        <div className='text-danger h3 my-2'>
            {winner ? <div>
                <h4 className='text-danger'>Winner Is:{winner} </h4>

                 </div>: <div>
                <h4 className='text-warning'>Next Player:{isXnext ?"X":"O"} </h4>
                 </div>}
        </div>
        <div className='game-board d-grid justify-content-center'>
            {
                board.map((value, index) => {
                    return <div key={index} className='square' onClick={() => {
                        handleClick(index)
                    }}> {value}</div>
                })
            }
        </div>


    </>
}
