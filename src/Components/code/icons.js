import React from "react";
import '../css/icons.css'
import {ReactComponent as check} from "../images/check.svg"

const iconTypes = {
    "check": (<check className="check-svg"></check>)
};


function CheckBox({type, onClick}){
    return(
        <span className={`Icon-container--${type}`} onClick={onClick}>
            {iconTypes[type]}
        </span>
    );
}
export {CheckBox};