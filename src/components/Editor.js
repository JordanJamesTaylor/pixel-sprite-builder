import { useState } from "react";
import { CirclePicker } from "react-color";
import "../styles/editor.css";

export default function Editor(){
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(false);
    const [buttonText, setButtonText] = useState(true);
    const [selectedColour, setSelectedColour] = useState("3f44336");

    function initDrawingPanel(){
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);
        setButtonText(!buttonText);
    }

    return (
        <div className="editor">
            <h1>Pixel Editor</h1>
            {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
            {hideDrawingPanel && (
                <>
                <div id="options">
                    <div className="option">
                        <input 
                            type="number" 
                            className="panelInput" 
                            defaultValue={panelWidth}
                            onChange={(e) => setPanelWidth(e.target.value)}
                        />
                        <span>Width</span>
                    </div>
                </div>
                <div id="options">
                    <div className="option">
                        <input 
                            type="number" 
                            className="panelInput" 
                            defaultValue={panelHeight} 
                            onChange={(e) => setPanelHeight(e.target.value)}
                        />
                        <span>Height</span>
                    </div>
                </div>
                </>)}
            <button className="button" onClick={initDrawingPanel}>{buttonText ? "start drawing" : "reset"}</button>
        </div>
    )
}