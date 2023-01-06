import { useRef } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import Row from "./Row"
import "../styles/drawingPanel.css";

export default function DrawingPanel({ width, height, selectedColour}){
    
    const panelRef = useRef();

    let rows = [];
    
    for(let i = 0; i < height; i++){
        rows.push(<Row key={i} width={width} selectedColour={selectedColour} />)
    }

    return (
        <div id="drawingPanel">
            <div id="pixels" ref={panelRef}>
                {rows}
            </div>
            <button className="btn" onClick={() => exportComponentAsPNG(panelRef)}>
                Export as PNG
            </button>
        </div>
    )
}