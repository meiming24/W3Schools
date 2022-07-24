import React, { Component } from "react";

export default class Other extends Component {
  render() {
    return (
        <div className="other" style={{width: `${ this.props.width }px`, backgroundColor: `${ this.props.backgroundColor }`}}>
            <h2> {this.props.title} </h2>
        </div>
    )
  }
}
