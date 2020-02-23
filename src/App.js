import React, { Component } from "react";
import "./styles/Games.css";

import BoardHook from "./components/BoardHook";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BoardHook />
            </div>
        );
    }
}

export default App;
