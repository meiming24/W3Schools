import React, { Component } from 'react'
import Card from '../components/Card';
import CodeEditor from '../components/CodeEditor';
import Intro from '../components/Intro'
import Landing from '../components/Landing'
import NavBar from '../components/NavBar'
import Other from '../components/Other';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      cards: [
        {
          title: 'PHP',
          sub: 'A web server programming language',
          backgroundColor: '#FFC0C7'
        },
        {
          title: 'jQuery',
          sub: 'A JS library for developing web pages',
          backgroundColor: '#FFF4A3'
        },
        {
          title: 'Java',
          sub: 'A programming language',
          backgroundColor: '#F3ECEA'
        },
        {
          title: 'C++',
          sub: 'A programming language',
          backgroundColor: '#D9EEE1'
        },
        {
          title: 'W3.CSS',
          sub: 'A CSS framework for faster and better responsive web pages',
          backgroundColor: '#96D4D4'
        },
        {
          title: 'Bootstrap',
          sub: 'A CSS framework for designing better web pages',
          backgroundColor: '#E7E9EB'
        },
      ],
      intros: [
        {
          title: 'HTML',
          backgroundColor: '#D9EEE1',
          sub: 'The language for building web pages',
          buttons: [
            {
              name: 'Learn HTML',
              backgroundColor: '#04aa6d',
              color: 'white'
            },
            {
              name: 'Video Tutorial',
              backgroundColor: '#fff4a3',
              color: 'black'
            },
            {
              name: 'HTML Reference',
              backgroundColor: 'black',
              color: 'white'
            },
            {
              name: 'Buy Certificate',
              backgroundColor: '#ffc0c7',
              color: 'black'
            }
          ]
        },
        {
          title: 'CSS',
          backgroundColor: '#FFF4A3',
          sub: 'The language for styling web pages',
          buttons: [
            {
              name: 'Learn CSS',
              backgroundColor: '#04aa6d',
              color: 'white'
            },
            {
              name: 'CSS Reference',
              backgroundColor: 'black',
              color: 'white'
            },
            {
              name: 'Buy Certificate',
              backgroundColor: '#ffc0c7',
              color: 'black'
            }
          ]
        },
        {
          title: 'JavaScript',
          backgroundColor: '#282A35',
          sub: 'The language for programming web pages',
          buttons: [
            {
              name: 'Learn JavaScript',
              backgroundColor: '#04aa6d',
              color: 'white'
            },
            {
              name: 'JavaScript Reference',
              backgroundColor: 'white',
              color: 'black'
            },
            {
              name: 'Buy Certificate',
              backgroundColor: '#ffc0c7',
              color: 'black'
            }
          ]
        },
        {
          title: 'Python',
          backgroundColor: '#F3ECEA',
          sub: 'A popular programming language',
          buttons: [
            {
              name: 'Learn Python',
              backgroundColor: '#04aa6d',
              color: 'white'
            },
            {
              name: 'Python Reference',
              backgroundColor: 'black',
              color: 'white'
            },
            {
              name: 'Buy Certificate',
              backgroundColor: '#ffc0c7',
              color: 'black'
            }
          ]
        },
        {
          title: 'SQL',
          backgroundColor: '#96D4D4',
          sub: 'A language for accessing databases',
          buttons: [
            {
              name: 'Learn SQL',
              backgroundColor: '#04aa6d',
              color: 'white'
            },
            {
              name: 'SQL Reference',
              backgroundColor: 'black',
              color: 'white'
            },
            {
              name: 'Buy Certificate',
              backgroundColor: '#ffc0c7',
              color: 'black'
            }
          ]
        }
      ],
      others: [
        {
          title: 'C',
          backgroundColor: '#FFC0C7',
          width: 616
        },
        {
          title: 'C#',
          backgroundColor: '#FFF4A3',
          width: 616
        },
        {
          title: 'R',
          backgroundColor: '#F3ECEA',
          width: 266
        },
        {
          title: 'Kotlin',
          backgroundColor: '#D9EEE1',
          width: 266
        },
        {
          title: 'Node.js',
          backgroundColor: '#96D4D4',
          width: 266
        },
        {
          title: 'React',
          backgroundColor: '#FFC0C7',
          width: 266
        },
        {
          title: 'JSON',
          backgroundColor: '#FFF4A3',
          width: 266
        },
        {
          title: 'AngularJS',
          backgroundColor: '#F3ECEA',
          width: 266
        },
        {
          title: 'MySQL',
          backgroundColor: '#D9EEE1',
          width: 266
        },
        {
          title: 'XML',
          backgroundColor: '#96D4D4',
          width: 266
        },
        {
          title: 'Sass',
          backgroundColor: '#FFC0C7',
          width: 266
        },
        {
          title: 'Icons',
          backgroundColor: '#FFF4A3',
          width: 266
        },
        {
          title: 'RWD',
          backgroundColor: '#F3ECEA',
          width: 266
        },
        {
          title: 'Graphics',
          backgroundColor: '#D9EEE1',
          width: 266
        },
        {
          title: 'SVG',
          backgroundColor: '#96D4D4',
          width: 266
        },
        {
          title: 'Canvas',
          backgroundColor: '#FFC0C7',
          width: 266
        },
        {
          title: 'Raspberry Pi',
          backgroundColor: '#FFF4A3',
          width: 266
        },
        {
          title: 'Cyber Security',
          backgroundColor: '#F3ECEA',
          width: 266
        },
        {
          title: 'Colors',
          backgroundColor: '#D9EEE1',
          width: 266
        },
        {
          title: 'Git',
          backgroundColor: '#96D4D4',
          width: 266
        },
        {
          title: 'Matplotlib',
          backgroundColor: '#FFC0C7',
          width: 266
        },
        {
          title: 'NumPy',
          backgroundColor: '#FFF4A3',
          width: 266
        },
        {
          title: 'Pandas',
          backgroundColor: '#F3ECEA',
          width: 266
        },
        {
          title: 'SciPy',
          backgroundColor: '#D9EEE1',
          width: 266
        },
        {
          title: 'ASP',
          backgroundColor: '#96D4D4',
          width: 266
        },
        {
          title: 'Accessibility',
          backgroundColor: '#FFC0C7',
          width: 266
        },
        {
          title: 'AppML',
          backgroundColor: '#FFF4A3',
          width: 266
        },
        {
          title: 'Go',
          backgroundColor: '#F3ECEA',
          width: 266
        },
        {
          title: 'TypeScript',
          backgroundColor: '#D9EEE1',
          width: 266
        },
        {
          title: 'Django',
          backgroundColor: '#96D4D4',
          width: 266
        },
        {
          title: 'Excel',
          backgroundColor: '#96D4D4',
          width: 616
        },
        {
          title: 'Google Sheets',
          backgroundColor: '#FFF4A3',
          width: 616
        },
        {
          title: 'Machine Learning',
          backgroundColor: '#FFC0C7',
          width: 616
        },
        {
          title: 'Artificial Intelligence',
          backgroundColor: '#F3ECEA',
          width: 616
        },
        {
          title: 'Statistics',
          backgroundColor: '#F3ECEA',
          width: 616
        },
        {
          title: 'Data Science',
          backgroundColor: '#D9EEE1',
          width: 616
        },
      ]
    }
  }
  render() {
    return (
      <>
        <NavBar></NavBar>
        <Landing></Landing>
        {
          this.state.intros.map((intro, index) => {
            return <Intro key = {index} backgroundColor = {intro.backgroundColor} title = {intro.title} sub = {intro.sub} buttons = {intro.buttons} ></Intro>
          })
        }
        <div className='class-card-container'>
          {
            this.state.cards.map((item, index) => {
              return <Card key = {index} backgroundColor = {item.backgroundColor} title = {item.title} sub = {item.sub}></Card>
            })
          }
        </div>

        <div className='other-container'>
          {/* <Other backgroundColor = {'#FFC0C7'} title = {'C'} width = {'616'}></Other> */}
          {
            this.state.others.map((item, index) => {
              return <Other key = {index} title = {item.title} backgroundColor = {item.backgroundColor} width = {item.width}></Other>
            })
          }
        </div>
        <CodeEditor></CodeEditor>
      </>
    )
  }
}
