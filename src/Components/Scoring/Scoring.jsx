export default function Scoring() {
    const headingStyle = { marginTop: "20px" };

    return (
        <div id="scoring" style={{ marginLeft: "100px" }}>
            <div id="how-to-score">
                <h2 style={{ textAlign: "center", marginBottom: "50px" }}>How to score</h2>

                <h3>Single</h3>
                <ul>
                    <li>Single 5s: 50 points</li>
                    <li>Single 1s: 100 points</li>
                </ul>

                <h3 style={headingStyle}>Three-of-a-kind:</h3>
                <ul>
                    <li>Three 2s: 200 points</li>
                    <li>Three 3s: 300 points</li>
                    <li>Three 4s: 400 points</li>
                    <li>Three 5s: 500 points</li>
                    <li>Three 6s: 600 points</li>
                    <li>Three 1s: 1000 points</li>
                </ul>

                <h3 style={headingStyle}>Four-of-a-kind:</h3>
                <ul>
                    <li>Four 2s: 400 points</li>
                    <li>Four 3s: 600 points</li>
                    <li>Four 4s: 800 points</li>
                    <li>Four 5s: 1000 points</li>
                    <li>Four 6s: 1200 points</li>
                    <li>Four 1s: 2000 points</li>
                </ul>

                <h3 style={headingStyle}>Five-of-a-kind:</h3>
                <ul>
                    <li>Five 2s: 800 points</li>
                    <li>Five 3s: 1200 points</li>
                    <li>Five 4s: 1600 points</li>
                    <li>Five 5s: 2000 points</li>
                    <li>Five 6s: 2400 points</li>
                    <li>Five 1s: 4000 points</li>
                </ul>

                <h3 style={headingStyle}>Six-of-a-kind:</h3>
                <ul>
                    <li>Six 2s: 1600 points</li>
                    <li>Six 3s: 2400 points</li>
                    <li>Six 4s: 3200 points</li>
                    <li>Six 5s: 4000 points</li>
                    <li>Six 6s: 4800 points</li>
                    <li>Six 1s: 8000 points</li>
                </ul>

                <h3 style={headingStyle}>Straight (1–6):</h3>
                <ul>
                    <li>Straight: 1500 points</li>
                </ul>

                <h3 style={headingStyle}>Three sets of pairs:</h3>
                <ul>
                    <li>Three sets of pairs: 750 points</li>
                </ul>
            </div>
        </div>
    );
}
