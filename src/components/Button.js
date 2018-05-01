import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <button className="btn btn-primary btn-sm float-right">
                {this.props.value}
            </button>
        )
    }
}