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
        const {rowNum, colNum} = this.props
        return (
            <div className="cell" onClick = {()=> this.handleClick(rowNum,colNum)}>
                {this.state.move}
            </div>
        )

    }
 
}

export default GridCell
