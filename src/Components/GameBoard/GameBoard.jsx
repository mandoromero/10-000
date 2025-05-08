import { useState } from "react";
import Rules from "../Rules/Rules.jsx";
import HowToScore from "../HowToScore/HowToScore.jsx";
import Die from "../Die/Die.jsx";


export default function GameBoard() {
    const [showRules, setShowRules] = useState(false);
    const [showHowToScore, setShowHowToScore] = useState(false);
    const [diceValues, setDiceValues]  = useState(
        Array(6).fill().map(() => ({ value: 1, isHeld: false }))
    );

    const [score, setScore] = useState(0);
    const [bank, setBank] = useState(0);

    function rollDie() {
       const totalRolls = 15;
       const interval = 50;

       let count = 0;

       const rollInterval = setInterval(() => {
        setDiceValues(prevDice =>
            prevDice.map(die =>
                die.isHeld
                    ? die
                    : { ...die, value: Math.floor(Math.random() * 6) + 1 }
            )
        );

        count++;
        if (count >= totalRolls) {
            clearInterval(rollInterval);
        }
       }, interval)
    }    
        
    function toggleHold(index) {
        setDiceValues(prev =>
          prev.map((die, i) =>
            i === index ? { ...die, isHeld: !die.isHeld } : die
          )  
        );
    }

    function resetDice() {
        setDiceValues(Array(6).fill().map(() => ({ value: 1, isHeld: false })));
        setScore(0);
    }

    function bankScore(){
        setBank(prev => prev + score);
        resetDice();
    }

    return (
        <div style={{ padding: "20px" }}>
            <div style={{ display: "flex", gap: "20px", marginBottom: "20px", width: "50%" }}>
                <button onClick={() => setShowRules(prev => !prev)}>
                    {showRules ? "Hide Rules" : "Show Rules"}
                </button>
                <button onClick={() => setShowHowToScore(prev => !prev)}>
                    {showHowToScore ? "Hide HowToScore" : "Show HowToScore"}
                </button>
            </div>

            <section id="rules-howToScore" 
                style={{ 
                    display: "flex", 
                    gap: "50px", 
                    flexWrap: "wrap"
                }}
            >
                {showRules && <Rules />}
                {showHowToScore && <HowToScore />}
            </section>
            <section
                id="dice-container"  
                style={{ 
                    padding: "60px", 
                    display: "flex", 
                    gap: "80px" }}>
                {diceValues.map((die, index) => (
                    <Die 
                        key={index} 
                        value={die.value}
                        isHeld={die.isHeld}
                        onHold={() => toggleHold(index)}
                    />
                ))}
            </section>
            <section 
                className="roll-btn"
                style={{ 
                    marginTop: "20px" 
                }}
            >
                <button
                    className="roll" 
                    onClick={rollDie}
                >
                    Roll Dice
                </button>
                <button
                    className="bank-brn"
                        onClick={bankScore}
                        sytle={{ marginLeft: "10px" }}
                >
                    Bank Score
                </button>
            </section>
            <section
                id="score-containter"
                style={{ 
                    marginTop: "20px"
                 }}
            >
            <div>Current Score: {score}</div>
            <div>Total Bank: {bank}</div>
            </section>
        </div>
    );
}
