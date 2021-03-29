import React from "react"
import GameBoard from "./GameBoard"
import styles from "./Welcome.module.css"

class GridContainer extends React.Component {
    state = {
        gridSize: 3,
        play: false
    }

    handleChange = (e) => {
        this.setState({
            gridSize: e.target.value
        })
    }

    handleClick = () => {
        this.setState({
            play: true
        })
    }

    handlePlayAgain = () => {
        this.setState({
            play: false
        })
    }

    render() {

        if (this.state.play) {
            return (
                <div>
                    <GameBoard gridSize={this.state.gridSize} playAgain={this.handlePlayAgain} newGame={true} />
                </div>
            )

        } else {
            return (
                <div className={styles.body}>
                    <div className={styles.welcomeContainer}>
                        <h1>Welcome to tic tac toe! :)</h1>
                        <div className={styles.intro}>
                            <p>Can you endure a longer game? Select the grid size i.e. 3 X 3, 4 X 4...</p>
                        </div>
                        <div className={styles.selectAndPlay}>
                            <select value={this.state.gridSize} class="grid-size-select" onChange={this.handleChange}>
                                <option value="3" selected>3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <button onClick={this.handleClick}>Play!</button>
                        </div>

                    </div>
                </div>
            )
        }

    }
}

export default GridContainer