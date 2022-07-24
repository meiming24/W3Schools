import React, { Component } from 'react';
import w3space from '../imgs/w3space.png';

export default class CodeEditor extends Component {
  render() {
    return (
        <div className='big-wrapper'>
            <div className='code-editor'>
                <h1>Code Editor</h1>
                <h4>With our online code editor, you can edit code and view the result in your browser</h4>
                <div>
                    <img src = "https://www.w3schools.com/codeeditor.gif" alt = 'gif'></img>
                    <button>Try Frontend Editor (HTML/CSS/JS)</button>
                    <button style={{ backgroundColor: '#FFF4A3', color: '#000' }}>Try Backend Editor (Python/PHP/Java..)</button>
                </div>    
            </div>
            <img src={ w3space } alt = 'w3spcae'></img>
        </div>
    )
  }
}
