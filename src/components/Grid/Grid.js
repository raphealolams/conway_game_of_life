import React from 'react';
import Box from '../Box/Box'


class Grid extends React.Component{
  render(){
    const width = (this.props.cols * 16) + 1;
    let rowsArray = [];
    let boxClass = "";

    for(let i = 0; i < this.props.rows; i++){
      for(let j = 0; j < this.props.cols; j++){
        let boxId = i + "_" + j;
        boxClass = this.props.gridFull[i][j] ? "box on" : "box off";
        rowsArray.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={this.props.selectBox}
          />
        )
      } 
    }
    return(
      <div className="grid" style={{width: width}}>
        {rowsArray}
      </div>
    )
  }
}


export default Grid