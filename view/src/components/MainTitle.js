import React, { Component } from 'react';
import Style from 'style-it';

export default class MainTitle extends Component {
    constructor(){
        super();
        this.state = {
            isShow: false,
            hover: false
        }
    }
    
  render() {
   
    return Style.it(`
    .main-title:hover {
      color: white;
      background-color: #04aa6d;
    }
  `,<div className='main-title'>
        {   
          this.state.isShow === false && <h3 onClick = { () => this.setState({ isShow: !this.state.isShow }) }> {this.props.header} <i className='fa fa-caret-down' style={{ visibility: `${this.props.icon}`}}></i></h3>
        } 
        {
          this.state.isShow === true && <h3 onClick = { () => this.setState({ isShow: !this.state.isShow }) }> {this.props.header} <i className='fa fa-caret-up' style={{ visibility: `${this.props.icon}`}}></i></h3>
        }
      </div>
    )
  }
}
