import React, { Component } from 'react'
import HTML from '../imgs/screen/html.png';
import CSS from '../imgs/screen/css.png';
import JavaScript from '../imgs/screen/js.png';
import Python from '../imgs/screen/python.png';
import SQL from '../imgs/screen/sql.png';

export default class Intro extends Component {
  render() {
    const imgs = [HTML, CSS, JavaScript, Python, SQL];
    const strings = ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL']
    return (
      <div className='intro' style={{ backgroundColor: `${ this.props.backgroundColor }` }}>
        
        <div className='left-content'>
            {
              this.props.title === 'JavaScript' ? <h1 style={{ color: 'white' }}> { this.props.title } </h1> :  <h1> { this.props.title } </h1>
            }
            {
              this.props.title === 'JavaScript' ? <h3 style={{ color: 'white' }}> { this.props.sub } </h3> :  <h3> { this.props.sub } </h3>
            }
            {
                this.props.buttons.map((button, key) => (
                    <button key = { key } style = { { backgroundColor: `${ button.backgroundColor }`, color: `${ button.color }` } }> { button.name }</button>
                ))
            }
        </div>

        <div className='card'>
            <div>
              <h3> { this.props.title } Example: </h3>
              {
                imgs.map((value, index) => {
                  if(this.props.title === strings[index]){
                    return <img src = { value } key = { index } alt = 'screen'></img>
                  }
                  return null;
                })
              } 
              <button>Try it Yourself</button>
            </div>
            
        </div>
      
      </div>
    )
  }
}
