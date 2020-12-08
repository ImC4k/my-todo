import React, { Component } from 'react'

export default class TodoItem extends Component {
    deleteItem = () => {
        // todo redux delete item with uuid
        console.log(`going to delete ${this.props.todo.id}`);
    }

    toggleDone = () => {
        if (this.props.todo.done) {
            console.log("now undone");
        }
        console.log("now done");
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
