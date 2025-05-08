

export default function Die({ value, isHeld, onHold }) {
     return (
        <div 
            className="die-containger" 
            style={{ 
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                marginRight: "auto", 
                marginLeft: "auto" 
            }}
        >
            <div
                className="die"
                onClick={ onHold } 
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
                    alignItems: "center", 
                    justifyContent: "center",
                    backgroundColor: isHeld ? "#b0e0e6" : "white"
                }}
            >
                {value}
            </div>
            <button 
                className="hold-btn" 
                onClick={onHold} 
                style={{
                    marginTop: "8px" 
                }}
            >
                {isHeld ? "Unhold" : "Hold"}
            </button>
        </div>
    );
}