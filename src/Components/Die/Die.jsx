import { useState } from "react";

export default function Die({value, onClick}) {
    const [value, setValue] = useState(1)

    return (
        <div 
            className="die" 
            onClick={rollDie}
            style={{ 
                cursor: "pointer", 
                fontSize: "2rem", 
                textAlign: "center", 
                width: "50px", 
                height: "50px",
                border: "3px solid black",
                borderRadius: "8%",
                paddingTop: "4px",
                display: "flex",
                alignItem: "center", 
                justifyContent: "center",
        }}>
            {value}
        </div>
    )
}