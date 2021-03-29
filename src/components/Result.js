import React from "react"

const Result = (props) => {
    let res = null;

    props.winner === null ? res = "It's a tie!" : res = `Player ${props.winner} wins!`

    return (
        <div className="result-container">
            <div className="game-over">
                <p className="result">Game Over! {res}</p>
                <button className="playBtn" onClick={props.playAgain}>
                    Play Again!
                </button>
            </div>

        </div>
    )
}

export default Result