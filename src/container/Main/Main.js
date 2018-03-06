import React from 'react';
import Grid from './../../components/Grid/Grid'

class Main extends React.Component{
  constructor(){
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }
 
  selectBox = (row , col) => {
    let gridCopy = arrayClone(this.state.gridFull)
    gridCopy[row][col] = !gridCopy[row][col]

    this.setState({
      gridFull: gridCopy
    })
  }

  seed = () => {
    console.log("seed oooo")
    let gridCopy = arrayClone(this.state.gridFull)
    for(let i = 0; i < this.rows; i++){
      for(let j = 0; j < this.cols; j++){
        if(Math.floor(Math.random() * 4) === 1 ){
          gridCopy[i][j] = true
        }
      }
    }
    this.setState({
      gridFull: gridCopy
    })
  }

  playButton = () => {
    clearInterval(this.intervalId)
    this.intervalId = setInterval(this.play , this.speed)
  }

  slow = () => {
    this.speed = 100
    this.playButton()
  }

  clear = () => {
    let grid = Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    
    this.setState({
      gridFull: grid,
      generation: 0
    })
  }

  gridSize = (size) => {
    switch(size){
      case "1":
        this.cols = 20
        this.rows = 10
      break;
      case "2":
        this.cols = 50
        this.rows = 30
      break;
      default:
        this.cols = 70
        this.rows = 50
    }
    this.clear()
  }

  play = () => {
    let grid = this.state.gridFull
    let grid2 =  arrayClone(this.state.gridFull)

    for (let i = 0; i < this.rows; i++){
      for (let j = 0; j < this.cols; j++){
        let count = 0;
        if (i > 0) if (grid[i - 1][j]) count++
        if(i > 0 && j > 0) if (grid[i - 1][j - 1]) count++
        if (i > 0 && j < this.cols - 1) if (grid[i - 1][j + 1]) count++
        if (j < this.cols - 1) if (grid[i][j + 1]) count++
        if (j > 0) if (grid[i][j - 1]) count++
        if (i < this.rows - 1) if (grid[i + 1][j]) count++
        if (i < this.rows - 1 && j > 0) if (grid[i + 1][j - 1]) count++
        if (i < this.rows - 1 && this.cols - 1) if (grid[i + 1][j + 1]) count++
        if (grid[i][j] && (count < 2 || count > 3)) grid2[i][j] = false
        if (!grid[i][j] && count === 3) grid2[i][j] = true
      }
    }
    this.setState({
      gridFull: grid2,
      generation: this.state.generation + 1
    })
  }

  componentDidMount(){
    this.seed()
    this.playButton()
  }
  render(){
    return(
      <div>
        <h1>The Game Of Life</h1>
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox= {this.selectBox}
        />
        <h2>Generators: {this.state.generation}</h2>
      </div>
    )
  }
}
function arrayClone(arr){
  return JSON.parse(JSON.stringify(arr))
}

export default Main