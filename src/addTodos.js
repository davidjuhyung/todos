import React, { Component } from 'react';

class addTodos extends Component {
    state = {
        id: 0,
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.content !== '') {
            this.props.addTodos(this.state)
            this.setState({
                content: ''
            })
        }
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label>My next todos:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default addTodos;