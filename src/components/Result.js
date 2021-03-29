import React from "react"

const Result = (props) => {
    let res = null;

    // if (props.winner === null) {
    //     res = <p>It's tie</p>
    // } else {
    //     res = <p>{props.winner} wins!</p>
    // }

    props.winner === null ? res = "It's a tie!" : res = `${props.winner} wins!`

        return (
            <div className="result-container">
                <div className="result">Game Over! {res}</div>
                <button className="playBtn" onClick={props.playAgain}>
                    Play Again!
                </button>
            </div>
            )
    

}

export default Result