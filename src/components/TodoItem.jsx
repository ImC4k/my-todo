import React, { Component } from 'react'

export default class TodoItem extends Component {
    deleteItem = () => {
        this.props.deleteTodo(this.props.todo.id);
    }

    toggleDone = () => {
        if (this.props.todo.done) {
            this.props.markTodoNotDone(this.props.todo.id);
        }
        else {
            this.props.markTodoDone(this.props.todo.id);
        }
    }

    render() {
        const {text, done} = this.props.todo;
        return (
            <div>
                <span>
                    <p>
                        {done? 'should be crossed' : 'no cross'}
                    </p>
                    <p onClick={this.toggleDone}>
                        {text}
                    </p>
                    <button onClick={this.deleteItem}>x</button>
                </span>
            </div>
        )
    }
}
