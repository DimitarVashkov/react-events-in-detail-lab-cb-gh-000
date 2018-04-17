// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component{
    constructor() {
        super();
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick = (event) => {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Click me!</button>
        );
    }
}