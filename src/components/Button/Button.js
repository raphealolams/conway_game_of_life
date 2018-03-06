import React from 'react'

import {ButtonToolBar, MenuItem, DropdownButton}  from 'react-bootstrap'


class Button extends React.Component{

  handleSelect = (eventVal) => {
    this.props.gridSizeLevel
  }


  render(){
    return{
      <div className="cenetr">
        <ButtonToolBar>
          <button className="btn btn-default" onclick={this.props.playButton}>
            Play
          </button>
          <button className="btn btn-default" onclick={this.props.pauseButton}>
            Pause
          </button>
          <button className="btn btn-default" onclick={this.props.clear}>
            Clear
          </button>
          <button className="btn btn-default" onclick={this.props.slow}>
            Slow
          </button>
          <button className="btn btn-default" onclick={this.props.fast}>
            Fast
          </button>
          <button className="btn btn-default" onclick={this.props.seed}>
            Seed
          </button>
          <DropdownButton title="Grid Size" id="size-menu" onSelect={this.handleSelect}>
            <MenuItem eventKey="1">
              20X10
            </MenuItem>
            <MenuItem eventKey="2">
              50X30
            </MenuItem>
            <MenuItem eventKey="2">
              70X50
            </MenuItem>

          </DropdownButton>
        </ButtonToolBar>
      </div>
    }
  }
}