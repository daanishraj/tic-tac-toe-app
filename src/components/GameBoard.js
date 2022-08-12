import React from "react"
import GridRow from "./GridRow"
import Result from "./Result"

class GameBoard extends React.Component {
    gridSize = this.props.gridSize
    state = {
        rows: Array(this.props.gridSize).fill(0),
        cols: Array(this.props.gridSize).fill(0),
        diag: 0,
        antiDiag: 0,
        isXNext: true,
        numCellsPlayed:0,
        result: {
            gameOver: false,
            winner: null
        }
    }   
    
    componentDidMount() {
        console.log('dummy commit');
        this.resetState()
      }
    
    updatesRequiredOnClick = (rowNum, colNum, playerMove) => {
             
        let val = null
        playerMove === "X" ? val=1 : val = -1

        let updatedRows = [...this.state.rows]
        let updatedCols = [...this.state.cols]
        let updatedDiag = this.state.diag
        let updatedAntiDiag = this.state.antiDiag


        updatedRows[rowNum]+=val
        updatedCols[colNum]+=val

        if (rowNum === colNum) {
            updatedDiag += val
        }

        if (rowNum + colNum === this.props.gridSize - 1) {
            updatedAntiDiag += val
        }

        //update the score and check if the game has ended after the state has been reset
        this.setState(prevState => ({
            rows: updatedRows,
            cols: updatedCols,
            diag:updatedDiag,
            antiDiag: updatedAntiDiag,
            isXNext: !prevState.isXNext,
            numCellsPlayed: prevState.numCellsPlayed + 1
        }), () => this.checkEndGame(rowNum, colNum, playerMove))

    }

    checkEndGame = (rowNum, colNum, playerMove) => {

        let maxTotal;
        playerMove === "X" ? maxTotal = Number(this.props.gridSize) : maxTotal = -1*(this.props.gridSize)

        let gameOver = false;
        let winner = null

        //check if we have a winner
        if (this.state.rows[rowNum]=== maxTotal ||
            this.state.cols[colNum]===maxTotal ||
            this.state.diag === maxTotal ||
             this.state.antiDiag === maxTotal) {
                gameOver = true
                winner = playerMove
             }

        //check for a tie
        if (this.state.numCellsPlayed===this.props.gridSize**2) {
            gameOver = true
        }

        this.setState({
            result: {
                gameOver: gameOver,
                winner: winner
            }
 
        })
    }

    resetState = () => {

        const rowArr = []
        const colArr = []

        for (let i=0; i< this.props.gridSize; i++){
            rowArr.push(0)
            colArr.push(0)
        }

        this.setState({
            rows: rowArr,
            cols: colArr,
            diag: 0,
            antiDiag: 0,
            isXNext: true,
            numCellsPlayed:0,
            result: {
                gameOver: false,
                winner: null
            }
        })

    }
  
    render() {
        
        const grid = []
        for (let row=0; row<this.props.gridSize; row++) {
            grid.push(<GridRow 
                rowNum = {row} 
                gridSize= {this.props.gridSize} 
                updatesRequiredOnClick = {this.updatesRequiredOnClick}
                isXNext = {this.state.isXNext}/>)
        }
        if (this.state.result.gameOver) {
            return (
                <Result winner = {this.state.result.winner} playAgain = {this.props.playAgain}/>
            )
            
        } else {

            return (
                <>
                <div className="board">{grid}</div>
                </>
            )
        }
    }
}

export default GameBoard