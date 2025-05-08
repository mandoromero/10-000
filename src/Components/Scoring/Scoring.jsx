export default function Scoring({diceValues}) {
    const score = calculateScoredsiceValues);

    function calculateScore(dice) {
        const counts = {};
        dice.forEach(die => {
            const val = die.value;
            counts[val] = (counts[val]  || 0) + 1;
        });

        let score = 0;

        //check for straight
        if (counts.slice(1).every(count => count ===1)) {
            return 1500;
        }

        //check for three pairs
        if (counts.filter(count => count === 2).length === 3) {
            return 750;
        }

        //check of n-ths of a kind from six to three
        for (let i = 1; i <= 6; i++) {
            if (counts[i] >= 6) {
                score += i === 1 ? 8000 : i * 800;
                counts[i] -= 6;
            } else if (counts[i] === 5) {
                score += i === 1 ? 4000 :  i * 400;
                counts[i] -= 5;   
            } else if (counts[i] === 4) {
                score += i === 1 ? 2000 : i * 200;
                counts[i] -= 4;
            } else if (counts[i] === 3) {
                score += i === 1 ? 1000 : i * 100;
                counts[i] -= 3;
            }
        } 

        //Add score for remaining single 1s and 5s
        score += counts[1] * 100;
        score += counts[5] * 50;

        return score;



    return (
        <div id="score">
            <h3>Current Score</h3>
        </div>
    )
}

