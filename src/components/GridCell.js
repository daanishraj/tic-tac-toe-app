import React from "react"

class GridCell extends React.Component {
    state = {
        clicked: false,
        move:""
    }
    // const cell=props.cell

    

/*
when a cell is clicked
determine which player played, and then determine symbol according to it
set the value in that cell
ensure that that cell is disabled
pass the row and the col num back to the parent so it can update the score variables
*/
// function testFunc(somArg => {

// })

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

            // if (this.props.isXNext) {
            //     this.setState(prevState=>({
            //         ...prevState,
            //         move: "X"
            //     }))
            // } else {
            //     this.setState(prevState => ({
            //         ...prevState,
            //         move:"O"
            //     }))
            // }

            // console.log(this.state.move)
        // this.props.updatesRequiredOnClick(rowNum, colNum, this.state.move)

        }


    }
    render(){
        const {rowNum, colNum, rowColIdentifier} = this.props

        let whichRow = "";
        let whichCol = "";

        if (rowColIdentifier.isFirstRow) {
            whichRow = "row-first"
        }

        if (rowColIdentifier.isLastRow) {
            whichRow = "row-last"
        }

        if (rowColIdentifier.isFirstCol) {
            whichCol = "col-first"
        } 
        
        if (rowColIdentifier.isLastCol) {
            whichCol = "col-last"
        }

        return (
            <div className={`cell ${whichRow} ${whichCol}`} onClick = {()=> this.handleClick(rowNum,colNum)}>
                {this.state.move}
            </div>
        )

    }
 
}

export default GridCell
