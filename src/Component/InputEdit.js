import React, { Component } from 'react';

class InputEdit extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: "" };
    }
    handleChange(event) {
    this.setState(
        {
        value: event.currentTarget.value
        },
        () => {
        // arrow function, ES2015
        // console.log(this.state);
        // call this.props.onUserInput(this.state.value)
        }
    );
    }
    render() {
        return (
            <div className="button">
                <input type="text" required onChange={this.handleChange} />
                    <button
                    onClick={() => {
                        this.props.receiveValue(this.state.value);
                    }}
                    >
                    Edit
                </button>
          </div>
        );
    }
}

export default InputEdit;