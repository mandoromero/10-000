import { useState } from "react";
import Rules from "../Rules/Rules.jsx";
import Scoring from "../Scoring/Scoring.jsx";

export default function GameBoard() {
    const [showRules, setShowRules] = useState(false);
    const [showScoring, setShowScoring] = useState(false);

    return (
        <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", gap: "20px", marginBottom: "20px", width: "50%" }}>
                <button onClick={() => setShowRules(prev => !prev)}>
                    {showRules ? "Hide Rules" : "Show Rules"}
                </button>
                <button onClick={() => setShowScoring(prev => !prev)}>
                    {showScoring ? "Hide Scoring" : "Show Scoring"}
                </button>
            </div>

            <section id="rules-scoring" style={{ display: "flex", gap: "50px", flexWrap: "wrap" }}>
                {showRules && <Rules />}
                {showScoring && <Scoring />}
            </section>
        </div>
    );
}
