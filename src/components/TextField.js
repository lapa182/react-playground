import React from 'react';

export default class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        event.preventDefault();
    }

    render() {
        return (
            <textarea className="textarea" value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange}></textarea>
        )
    }
}