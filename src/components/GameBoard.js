import React from "react"
import GridRow from "./GridRow"
import Result from "./Result"

/*
What is state
the state of the board at any given point
all the variables which we need to compute who is the winnner
player1 and player2  ???

*/

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
        this.resetState()
      }
    
    updatesRequiredOnClick = (rowNum, colNum, playerMove) => {
       
        // this.setState(prevState => {
        //     return {
        //         isXNext: !prevState.isXNext
        //     }
        // })
            
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
        
        let check = maxTotal === this.state.diag

        //check if we have a winner
        if (this.state.rows[rowNum]=== maxTotal ||
            this.state.cols[colNum]===maxTotal ||
            this.state.diag === maxTotal ||
             this.state.antiDiag === maxTotal) {
                 (console.log("We have a winner..."))
                gameOver = true
                winner = playerMove
             }

        //check for a tie
        if (this.state.numCellsPlayed===this.props.gridSize**2) {
            console.log(this.state.numCellsPlayed)
            console.log("Game over!!!")
            console.log("It's a tie!")
            gameOver = true
        }

        this.setState({
            result: {
                gameOver: gameOver,
                winner: winner
            }
 
        })
    }

    playAgain1 = () => {
        this.setState({
            rows: Array(this.props.gridSize).fill(0),
            cols: Array(this.props.gridSize).fill(0),
            diag: 0,
            antiDiag: 0,
            isXNext: true,
            numCellsPlayed:0,
            result: {
                gameOver: false,
                winner: null
            }})
    
    }

    resetState = () => {

        const rowArr = []
        const colArr = []

        for (let i=0; i< this.props.gridSize; i++){
            // console.log(i)
            rowArr.push(0)
            colArr.push(0)
            // console.log(rowArr)
            // console.log(colArr)
        }

        // console.log(rowArr)
        // console.log(colArr)


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

        // this.setState({
        //     rows: new Array(this.props.gridSize).fill(0),
        //     cols: new Array(this.props.gridSize).fill(0),
        //     diag: 0,
        //     antiDiag: 0,
        //     isXNext: true,
        //     numCellsPlayed:0,
        //     result: {
        //         gameOver: false,
        //         winner: null
        //     }
        // }, ()=>console.log(this.state))
    
    }

    // newGame = this.props.newGame;
    // if (newGame) {
    //     console.log("We are here..)")
    //     this.resetState()
    //     newGame =false

    // }
  
    render() {
        
        const grid = []
        for (let row=0; row<this.props.gridSize; row++) {
            grid.push(<GridRow 
                rowNum = {row} 
                numColumns= {this.props.gridSize} 
                updatesRequiredOnClick = {this.updatesRequiredOnClick}
                isXNext = {this.state.isXNext}/>)
        }
        if (this.state.result.gameOver) {
            return (
                <Result winner = {this.state.result.winner} playAgain1 = {this.playAgain1} playAgain = {this.props.playAgain}/>
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