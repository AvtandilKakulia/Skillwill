import { Component } from "react"
import ToDoItem from "./ToDoItem"
import DoneItem from "./DoneItem"


class ToDoList extends Component {
    state = {
        inputValue: '',
        todos: [{ id: 1, description: "task-1" }, { id: 2, description: 'task-2' }],
        todosDone: []
    }

    removeToDO = (id) => {
        const todos = this.state.todos.filter((toDo) => toDo.id !== id)
        this.setState({
            todos
        })
    }

    removeDone = (id) => {
        const todosDone = this.state.todosDone.filter((toDo) => toDo.id !== id)
        this.setState({
            todosDone
        })
    }

    onChange = (event) => {
        const value = event.target.value
        this.setState({
            inputValue: value
        })
    }

    addToDo = () => {
        const toDoId = () => {
            if (this.state.todos.length == 0) {
                return 1
            } else {
                return this.state.todos[this.state.todos.length - 1].id + 1
            }
        }

        const newToDo = {
            id: toDoId(),
            description: this.state.inputValue
        }

        this.setState({
            todos: [...this.state.todos, newToDo],
            inputValue: ''
        })

    }

    todoDone = (id) => {
        const done = this.state.todos.filter((toDo) => toDo.id == id)
        const newToDo = done[0]

        this.setState({
            todosDone: [...this.state.todosDone, newToDo],
        })

        const todos = this.state.todos.filter((toDo) => toDo.id !== id)
        this.setState({
            todos
        })
    }

    todoRecover = (id) => {
        const done = this.state.todosDone.filter((toDo) => toDo.id == id)
        const newToDo = done[0]

        this.setState({
            todos: [...this.state.todos, newToDo],
        })

        const todosDone = this.state.todosDone.filter((toDo) => toDo.id !== id)
        this.setState({
            todosDone
        })
    }

    keyDown = (event) => {
        if (event.key === 'Enter'){
            this.addToDo()
        }
    }

    render() {
        return (
            <div className="taskBoxWrapper">
                <div className="toDoBox">
                    <div className="toDoBox-title">
                        <h3>active to do</h3>
                    </div>
                    <div className="taskList">
                        <ol>
                            {this.state.todos.map((el) => (
                                <ToDoItem key={el.id} id={el.id} description={el.description} actionClr={this.removeToDO} actionDone={this.todoDone} />
                            ))}
                        </ol>
                        <div className="addToDo">
                            <i className="fa-regular fa-newspaper messageIcon"></i>
                            <input type="text" placeholder="Message..." onChange={this.onChange} value={this.state.inputValue} onKeyDown={this.keyDown}/>
                            <i className="fa-regular fa-paper-plane addMessage" onClick={this.addToDo}></i>
                        </div>
                    </div>
                </div>
                <div className="hrline"></div>
                <div className="doneBox">
                    <div className="toDoBox-title">
                        <h3>already done</h3>
                    </div>
                    <div className="taskList">
                        <ol>
                            {this.state.todosDone.map((el) => (
                                <DoneItem key={el.id} id={el.id} description={el.description} actionClr={this.removeDone} actionDone={this.todoRecover}/>
                            ))}
                        </ol>
                    </div>
                    <div className="">

                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoList