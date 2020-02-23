import React, { Component } from "react";

import Cell from "./Cell";

export default class Board extends Component {
    constructor(props){
        super(props);
    }

    state = {
        board: [
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false],
            [false, false, false, false, false]
        ],
        isWin: false
    };

    componentDidMount(){
        const boardClone = this.state.board;
        for(let i = 0; i < boardClone.length + 1; i++){
            const x = Math.floor(Math.random() * boardClone.length);
            const y = Math.floor(Math.random() * boardClone.length);
            boardClone[x][y] = true;
        }
        this.setState({
            board: boardClone
        })
    }

    flipCell = (x, y, boardClone) => {
        if (x >= 0 && x < 5 && y >= 0 && y < 5) {
            boardClone[x][y] = !boardClone[x][y];
        }
    };

    checkWin = () => {
        const { board } = this.state;
        if (board.every(row => row.every(cell => cell === true) === true)) {
            this.setState({
                isWin: true
            });
        }
    };

    handleCellClick = (x, y) => {
        const boardClone = this.state.board;
        this.flipCell(x, y, boardClone);
        this.flipCell(x + 1, y, boardClone);
        this.flipCell(x, y + 1, boardClone);
        this.flipCell(x - 1, y, boardClone);
        this.flipCell(x, y - 1, boardClone);
        this.setState(
            {
                board: boardClone
            },
            this.checkWin
        );
    };

    render() {
        const { board, isWin } = this.state;
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
                                            this.handleCellClick(
                                                rowIndex,
                                                cellIndex
                                            )
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
}
