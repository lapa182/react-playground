import React from 'react';
import Form from './Form';
import '../index.css';

export default class App extends React.Component {
    render() {
        return (
            <main className="reactify container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12">
                        <Form />
                    </div>
                </div>
            </main>
        )
    }
}
