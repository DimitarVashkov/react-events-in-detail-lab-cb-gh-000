// Code CoordinatesButton Component Here

import React from 'react';

export default class CoordinatesButton extends React.Component{
    constructor(){
        super();
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }

    render() {
        return (
            <button onClick={this.handleClick}>Coord</button>
        );
    }
}