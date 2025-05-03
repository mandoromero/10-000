export default function Rules() {
    return(
        <div id="rules" style={{ width: "50%", marginLeft: "100px" }}>
            <div id="how-to-play" style={{ width: "300px", marginLeft: "auto", marginRight: "auto" }}>
                <h2 style={{ textAlign: "center", marginBottom: "50px" }}>How to play</h2>
                <ul>
                    <li>
                        Start with 6 dice, roll and check scoring combinations: single
                        1's and 5's, three or more-of-a-kind or straight.
                    </li>
                    <li>
                        Hold any scoring dice you want to save. Your score will be saved
                        in the bank. You may reroll the remaining dice to try and score
                        point more points during the round.
                    </li>
                    <li>
                        If all dice are used to score points, the player continues their
                        turn and may pick up all 6 dice to continue rolling, adding
                        points to your total.
                    </li>
                    <li>
                        You must roll at least 1000 points on your first turn to keep
                        playing.
                    </li>
                    <li>
                        End your turn when you choose to stop, hit the bank button to
                        add the points to your total score.
                    </li>
                    <li>
                    If after you roll, none of your dice can be used to add points
                        to your score, your turn ends and you score 0 for the round and
                        lose any saved points in the bank.
                    </li>
                    <li>First player to score 10,000 or more total points, Wins!</li>
                </ul>
            </div>
        </div>  
    );
}