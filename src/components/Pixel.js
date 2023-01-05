import { useState } from "react";
import "../styles/pixel.css";

export default function Pixel({ selectedColour }){
    
    // Background colour for pixel
    const [pixelColour, setPixelColour] = useState("#fff");
    // Used when user hovers over a pixel with their mouse
    const [oldColour, setOldColour] = useState(pixelColour);
    // Helper while switching colour
    const [canChangeColour, setCanChangeColour] = useState(true);
    
    return <div className="pixel" style={{backgroundColor: pixelColour}}></div>
}
