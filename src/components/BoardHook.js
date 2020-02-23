import React, { useState, useEffect } from "react";

import Cell from "./Cell";

export default function Board(props) {
    const [board, setBoard] = useState([
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false],
        [false, false, false, false, false]
    ]);

    useEffect(() => {
        const boardClone = board;
        for (let i = 0; i < boardClone.length + 1; i++) {
            const x = Math.floor(Math.random() * boardClone.length);
            const y = Math.floor(Math.random() * boardClone.length);
            boardClone[x][y] = true;
        }
        setBoard(boardClone);
    }, [board]);

    const flipCell = (x, y, boardClone) => {
        if (x >= 0 && x < 5 && y >= 0 && y < 5) {
            boardClone[x][y] = !boardClone[x][y];
        }
    };

    const checkWin = () => {
        const { board } = this.state;
        if (board.every(row => row.every(cell => cell === true) === true)) {
            this.setState({
                isWin: true
            });
        }
    };

    const handleCellClick = (x, y) => {
        const boardClone = board;
        flipCell(x, y, boardClone);
        flipCell(x + 1, y, boardClone);
        flipCell(x, y + 1, boardClone);
        flipCell(x - 1, y, boardClone);
        flipCell(x, y - 1, boardClone);
        setBoard(boardClone);
    };
    return (
        <div className="board">
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
