import React from "react"
import GridCell from "./GridCell"


const GridRow = (props) => {

    const res = []

    for (let col=0; col < props.numColumns; col++){
        res.push(<GridCell 
            rowNum = {props.rowNum} 
            colNum={col}
            updatesRequiredOnClick = {props.updatesRequiredOnClick} 
            isXNext = {props.isXNext}
            />)
    }
    return (
        <div className="row">{res}</div>
    )

    }

export default GridRow