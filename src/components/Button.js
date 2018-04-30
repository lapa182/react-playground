import React from 'react';

export default class Button extends React.Component {
    render() {
        return (
            <button className="btn btn-primary btn-sm float-right">
                {this.props.value}
            </button>
        )
    }
}