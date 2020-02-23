import React, { useState, useEffect } from "react";

import Cell from "./Cell";

export default function Board(props) {
    const createBoard = (x, y) => {
        let board = [];
        for (let i = 0; i < x; i++) {
            board[i] = new Array(y).fill(false);
        }
        for (let i = 0; i < 4; i++) {
            const x = Math.floor(Math.random() * board.length);
            const y = Math.floor(Math.random() * board.length);
            board[x][y] = true;
        }
        return board;
    };
    const [board, setBoard] = useState(createBoard(3, 3));
    const [isWin, setIsWin] = useState(false);
    const flipCell = (x, y, boardClone) => {
        if (x >= 0 && x < 3 && y >= 0 && y < 3) {
            boardClone[x][y] = !boardClone[x][y];
        }
    };

    const checkWin = () => {
        if (board.every(row => row.every(cell => cell === true))) {
            setIsWin(true);
        }
    };

    const handleCellClick = (x, y) => {
        const boardClone = [...board];
        flipCell(x, y, boardClone);
        flipCell(x + 1, y, boardClone);
        flipCell(x, y + 1, boardClone);
        flipCell(x - 1, y, boardClone);
        flipCell(x, y - 1, boardClone);
        setBoard(boardClone);
    };
    useEffect(() => {
        checkWin();
    });
    return (
        <div className="board">
            {isWin && <p>You Win!</p>}
            <table>
                <tbody>
                    {board.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <Cell
                                    key={`${rowIndex} + ${cellIndex}`}
                                    handleCellClick={() =>
                                        handleCellClick(rowIndex, cellIndex)
                                    }
                                    isFlipped={cell}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
