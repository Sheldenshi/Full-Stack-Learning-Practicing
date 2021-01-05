import React from 'react'
import ReactDOM from 'react-dom'

/*
const App = () => {
  //console.log('Hello from component')
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'It is ', now.toString()
    ),
    React.createElement(
      'p', null, a, 'plus', b, 'is', a + b
    )
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
*/

const Hello = () => {  
  return (
      <div>      
        <p>Hello world</p>    
      </div>  )}
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello /> 
      <Hello />   
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))