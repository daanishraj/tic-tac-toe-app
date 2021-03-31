import React from "react"
import GridCell from "./GridCell"


const GridRow = (props) => {

    const res = []

    for (let col=0; col < props.gridSize; col++){

        res.push(<GridCell 
            rowNum = {props.rowNum} 
            colNum={col}
            updatesRequiredOnClick = {props.updatesRequiredOnClick} 
            isXNext = {props.isXNext}
            gridSize = {props.gridSize}
            key = {`${props.rowNum}${col}`}
            />)
    }
    return (
        <div className="row">{res}</div>
    )

    }

export default GridRow