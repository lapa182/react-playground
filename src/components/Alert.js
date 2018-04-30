import React from 'react';

export default class Alert extends React.Component {
    render() {
        return (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Holy guacamole!</strong> Your e-mail was sent!
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }
}