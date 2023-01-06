import { useState } from "react";
import "../styles/pixel.css";

export default function Pixel({ selectedColour }){
    
    // Background colour for pixel
    const [pixelColour, setPixelColour] = useState("#fff");
    // Used when user hovers over a pixel with their mouse
    const [oldColour, setOldColour] = useState(pixelColour);
    // Helper while switching colour
    const [canChangeColour, setCanChangeColour] = useState(true);

    function applyColour(){
        setPixelColour(selectedColour);
        console.log("PIXEL COLOUR: ", pixelColour);
        // Don't allow user to change colour to currently selected colour...
        // ...prevents hover effects from overriding the click event
        setCanChangeColour(false);
    }

    function changeColourOnHover(){
        // Remeber previous colour so it can be reset when user choses another colour
        setOldColour(pixelColour);
        setPixelColour(selectedColour);
    }

    function resetColour(){
        if(canChangeColour){
            setPixelColour(oldColour);
        }

        setCanChangeColour(true);
    }
    
    return <div 
        className="pixel" 
        onClick={applyColour} 
        onMouseEnter={changeColourOnHover} 
        onMouseLeave={resetColour} 
        style={{backgroundColor: pixelColour}}
    ></div>
}
