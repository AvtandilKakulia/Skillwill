import './App.css'
import ToDoList from './components/ToDoList'
import { Component } from 'react'

class App extends Component {

  render() {
    return (
      <div className="outerWrapper">
        <div className="mainTitle">
          <h1>To Do List</h1>
        </div>
        <ToDoList />
      </div>
    )
  }

}

export default App