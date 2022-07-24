import React, { Component } from 'react'

export default class Button extends Component {
    constructor(){
        super();
        this.state = {
            hover: false
        }
        this.toggleHover = this.toggleHover.bind(this);
    }
    toggleHover(){
        this.setState({hover: !this.state.hover})
    }
  render() {
        var color, backgroundColor;
        if (this.state.hover === false) {
            color = this.props.color;
            backgroundColor = this.props.backgroundColor;
        } else {
            color = '#fff';
            backgroundColor = '#04aa6d';
        }
    return (
      <button onMouseOver={this.toggleHover} onMouseOut={this.toggleHover} style = { { backgroundColor: `${ backgroundColor }`, color: `${ color }`, padding: `0px ${ this.props.width }px`, paddingRight: `${ this.props.pdr }px` } }> {this.props.text} </button>
    )
  }
}
