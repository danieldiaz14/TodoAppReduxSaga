import React from 'react';

import { getTodos, updateTodo } from '../actions'
import { connect } from 'react-redux';

class EditTodo extends React.Component {

    state = {
        title: this.props.selectedTodo.title,
        description: this.props.selectedTodo.description,
        id: this.props.selectedTodo.id
    };

    onSubmit = e => {
        e.preventDefault();
        const {title, description} = this.state;
        if (title.length > 0 && description.length > 0) this.props.updateTodo(this.state);
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <form onSubmit={e => e.preventDefault()} className="ui inverted form">
                <div className="field">
                    <label>Title</label>
                    <input name="title" value={this.state.title} onChange={this.handleChange} autoComplete="off"/>
                </div>
                <div className="field">
                    <label>Description</label>
                    <input name="description" value={this.state.description} onChange={this.handleChange} autoComplete="off"/>
                </div>
                <button onClick={this.onSubmit}type="submit" className="ui primary button">Submit</button>
                <button onClick={this.props.getTodos} className="ui negative button">Back</button>
            </form>
        )
    }
}

export default connect(null, {getTodos, updateTodo})(EditTodo);