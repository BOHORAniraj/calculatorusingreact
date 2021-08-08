import React from "react";

export const Display = ({ textToDisplay, isOff , isError}) => {

    const clssName= isError ? "error" : "" ;
    return (
    <div id="result" className={isOff ? "result off" : "result"}>


    {textToDisplay || "0.00"}
    </div>
    
)

}