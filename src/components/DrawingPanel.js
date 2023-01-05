import React from "react";
import Row from "./Row"
import "../styles/drawingPanel.css";

export default function DrawingPanel({ width, height, selectedColour}){
    
    let rows = [];
    
    for(let i = 0; i < height; i++){
        rows.push(<Row key={i} width={width} selectedColour={selectedColour} />)
    }

    return (
        <div id="drawingPanel">
            <div id="pixels">{rows}</div>
        </div>
    )
}