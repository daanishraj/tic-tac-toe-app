import React from "react"
import GridCell from "./GridCell"


const GridRow = (props) => {

    const rowColIdentifier = {
        isFirstRow: false,
        isLastRow: false,
        isFirstCol: false,
        isLastCol: false,

    }

    // if (props.rowNum===0){
    //     whichRow += "-first"

    // } else if (props.rowNum === props.gridSize -1) {
    //     whichRow += "-last"
    // }

    const res = []
    console.log("numColumns: ", props.numColumns)

    for (let col=0; col < props.numColumns; col++){
        console.log("col: ", col)
        if (props.rowNum === 0) {
            rowColIdentifier.isFirstRow = true
        } 

        if (props.rowNum === props.numColumns - 1) {
            rowColIdentifier.isLastRow = true
        }

        if (col === 0) {
            console.log("first column...")
            rowColIdentifier.isFirstCol = true
        }

        if (col===props.numColumns-1) {
            rowColIdentifier.isLastCol = true
        }

        res.push(<GridCell 
            rowNum = {props.rowNum} 
            colNum={col}
            updatesRequiredOnClick = {props.updatesRequiredOnClick} 
            isXNext = {props.isXNext}
            rowColIdentifier={rowColIdentifier}
            />)

    }
    

    return (
        
        <div className="row">{res}</div>
    )

    }

export default GridRow