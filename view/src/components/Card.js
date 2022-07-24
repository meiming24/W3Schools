import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    return (
      <div className='class-card' style={{backgroundColor: `${this.props.backgroundColor}`}}>
        <h2>{this.props.title}</h2>
        <h5>{this.props.sub}</h5>
        <button>Learn {this.props.title}</button>
      </div>
    )
  }
}
