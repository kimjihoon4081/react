import React, { Component } from "react";

class Counter extends Component {
    
    state = {
        number : 0,
        fixed : 0 
    };


    render() {
        const {number, fixed} = this.state;

        return (
        <div>
            <h1>{number}</h1>
            
            <button onClick = {
                () => {
                    this.setState( 
                        {
                                number : number + 1
                        },
                        ()=>{
                            console.log('방금 setState를 호출');
                            console.log(this.state);
                        } 
                    );
                }
            }>
                + 1
            </button>

            <h1>{fixed}</h1>

        </div>
        );
    }

}

export default Counter;