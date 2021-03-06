import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercises}
      </p>
    </div>
  )
}

const Content = ({parts}) => {
  
  return (
    <div>
      {parts.map((part) =>
          <Part key={part.id} part={part}/>
      )}
    </div>
  )
}

const Total = ({parts}) => {
  const exercisesArr = parts.map((part) => part.exercises)
  const reducer = (s, c) => {
    return s + c
  }
  const total = exercisesArr.reduce(reducer)
  return (
    <div>
      <p>Total of {total} exercises</p>
    </div>
  )
}
const Course = ({ courses })=> {
  const mapFun = (course) => {
    return (
      <div key={course.id}>
        <Header course={course} />
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>
    )
     
  }
  return (
    courses.map(mapFun)
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <Course courses={courses} />
  )
  
}

ReactDOM.render(<App />, document.getElementById('root'))