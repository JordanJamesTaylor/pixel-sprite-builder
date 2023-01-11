import { useState } from "react";
import { GithubPicker } from "react-color";
import DrawingPanel from "./DrawingPanel";
import "../styles/editor.css";

export default function Editor(){
    // User sets draw space dimensions
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);

    // Hide UI elements until user clicks btn
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);

    // Change colour based on user selection
    const [selectedColour, setSelectedColour] = useState("3f44336");

    // Change UI to allow user to begin drawing
    function initDrawingPanel(){
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);
    }

    // Chnage user's selected colour
    function changeColour(colour){
        setSelectedColour(colour.hex);
    }

    return (
        <div id="editor">
            <h1 id="editor-title">SPRITE BUILDER</h1>
            {hideDrawingPanel ? 
            <button className="btn" onClick={initDrawingPanel}>
                START BUILDING!
            </button>
            :
            <div id="play-space">
                <div id="panel-space">
                    <GithubPicker color={selectedColour} onChangeComplete={changeColour} />
                    <span style={{height: "25px"}}/>
                    <DrawingPanel 
                        width={panelWidth}
                        height={panelHeight}
                        selectedColour={selectedColour}
                    />
                </div>  
                <div id="btn-space">
                    <div className="grid-dimension">
                    <div className="options">
                        <input 
                            type="number" 
                            className="panelInput" 
                            defaultValue={panelWidth}
                            onChange={(e) => setPanelWidth(e.target.value)}
                        />
                        <span className="editor-txt">Width</span>
                    </div>
                    <div className="option">
                        <input 
                            type="number" 
                            className="panelInput" 
                            defaultValue={panelHeight} 
                            onChange={(e) => setPanelHeight(e.target.value)}
                        />
                        <span className="editor-txt">Height</span>
                    </div>
                    </div>
                </div>
            </div>
            }
        </div>
    ) 
}

/*
    <div className="editor">
            <h1 className="editor-txt">Pixel Editor</h1>
            {hideDrawingPanel && <h2 className="editor-txt">Enter Panel Dimensions</h2>}
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
                        <span className="editor-txt">Width</span>
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
                        <span className="editor-txt">Height</span>
                    </div>
                </div>
            </>)}
            <button className="btn" onClick={initDrawingPanel}>
                {hideOptions ? "reset" : "start drawing"}
            </button>
            {hideOptions && (
                <>
                <GithubPicker color={selectedColour} onChangeComplete={changeColour} />
                <DrawingPanel 
                    width={panelWidth}
                    height={panelHeight}
                    selectedColour={selectedColour}
                />
                </>
            )}
    </div>
*/