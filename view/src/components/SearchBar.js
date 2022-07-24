import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div className='search-bar'>
        <input type="text" placeholder='Search our tutorials, e.g. HTML' name="search"></input>
        <button type="submit"><i className="fa fa-search"></i></button>
      </div>
    )
  }
}
