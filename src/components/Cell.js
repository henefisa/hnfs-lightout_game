import React, { useState } from "react";
import classnames from "classnames";
export default function Cell(props) {
    const a = useState();
    console.log(a);
    return (
        <td
            className={classnames("cell", {
                active: props.isFlipped
            })}
            onClick={props.handleCellClick}
        ></td>
    );
}
