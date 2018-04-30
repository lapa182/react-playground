import React from 'react';
import Button from './Button';
import Alert from './Alert';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            placeholder: 'Please write the motive of your absence from the office'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
        event.preventDefault();
    }

    handleSubmit(event) {
        console.info(this.state.value);
        this.setState({
            value: ''
        });

        alert('Email successfully fired');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Alert />
                <div className="form-group">
                    <textarea   className="form-control" 
                                value={this.state.value}
                                placeholder={this.state.placeholder}
                                onChange={this.handleChange}></textarea>
                </div>
                <Button value={'Submit'} />
            </form>
        )
    }
}