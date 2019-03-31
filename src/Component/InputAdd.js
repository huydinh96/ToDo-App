import React, { Component } from 'react';

class InputAdd extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: "" };
    }
    handleChange(event) {
        event.preventDefault();
        this.setState(
          {
            value: event.currentTarget.value
          },
          () => {
            // arrow function, ES2015
            // console.log(this.state);
          }
        );
    }
    render() {
        return (
            <div className="button">
                <input type="text" required onChange={this.handleChange} />
                <button
                    onClick={() => {
                        this.props.addData(this.state.value);
                    }}
                >
                Add Task
                </button>
            </div>
        );
    }
}

export default InputAdd;