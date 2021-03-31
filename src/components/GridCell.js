import React from "react"

class GridCell extends React.Component {
    state = {
        clicked: false,
        move:""
    }
    

/*
when a cell is clicked
determine which player played, and then determine symbol according to it
set the value in that cell
ensure that that cell is disabled
pass the row and the col num back to the parent so it can update the score variables
*/

    handleClick = (rowNum, colNum) => {
        //repeated click on the same cell should have no effect
        if (!this.state.clicked) {
            this.setState(prevState =>({
                clicked: !prevState.clicked,
            })) 

            let currentMove;
            this.props.isXNext ? currentMove="X" : currentMove="O"
            this.setState({
                move:currentMove
            }, () => this.props.updatesRequiredOnClick(rowNum, colNum, this.state.move))
        }


    }
    render(){
        
        const rowNum = this.props.rowNum
        const colNum = this.props.colNum
    
        let whichRow = "";
        let whichCol = "";
        
        if (rowNum===0) {
            whichRow = "row-first"
        } else if (rowNum===this.props.gridSize - 1) {
            whichRow = "row-last"
        }

        if (colNum===0) {
            whichCol = "col-first"
        } else if (colNum===this.props.gridSize - 1) {
            whichCol = "col-last"
        }

        let cellClass = "cell"

        if (whichRow) {
            cellClass += ` ${whichRow}`
        }

        if (whichCol) {
            cellClass += ` ${whichCol}`
        }

        return (
            <div className={cellClass} onClick = {()=> this.handleClick(rowNum,colNum)}>
                {this.state.move}
            </div>
        )

    }
 
}

export default GridCell
