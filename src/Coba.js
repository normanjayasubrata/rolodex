import React, { Component } from 'react'

export class Coba extends Component {
    constructor() {
        super();
        this.hancleClick2 = this.hancleClick1.bind(this);
    }

    hancleClick1() {
        console.log("click 1", this);
    }

    hancleClick3 = () => {
        console.log("click 3", this);
    }

    render() {
        return (
            <div>
               <button onClick={this.hancleClick1()}>click 1</button>
               <button onClick={this.hancleClick1}>click 2</button>
               <button onClick={this.hancleClick2}>click 3</button>
               <button onClick={this.hancleClick3}>click 4</button>
            </div>
        )
    }
}

export default Coba
