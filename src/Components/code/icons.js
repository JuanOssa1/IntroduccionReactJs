import React from "react";
import '../css/icons.css'
import {ReactComponent as Check} from "../images/check.svg"

const iconTypes = {
    "check": (<Check className="check-svg"></Check>)
};


function CheckBox({type, onClick}){
    return(
        <span className={`Icon-container--${type}`} onClick={onClick}>
            {iconTypes[type]}
        </span>
    );
}
export {CheckBox};