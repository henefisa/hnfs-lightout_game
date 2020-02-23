import React from "react";
import classnames from "classnames";
export default function Cell(props) {
    return (
        <td
            className={classnames("cell", {
                active: props.isFlipped
            })}
            onClick={props.handleCellClick}
        ></td>
    );
}
