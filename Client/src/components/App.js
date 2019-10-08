import React from 'react';

import { connect } from 'react-redux';

import TodosList from './TodosList';
import CreateTodo from './CreateTodo';

class App extends React.Component {

    checkIfRenderCreateTodo = () => {
        const {editTodo} = this.props.todos;
        if (!editTodo) {
            return (
                <div className="ui inverted segment">
                    <CreateTodo/>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.checkIfRenderCreateTodo()}
                <TodosList/>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(App);