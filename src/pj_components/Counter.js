import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }

    }

    counterIncrease = () => {
       
       if(this.state.counter <10){
        this.setState({
            counter: this.state.counter + 1
        })

    }
}

    counterDecrease = () => {
        
        if(this.state.counter >0){


        this.setState({
            counter: this.state.counter -1
        })
    }


    }

    render() {
        return (
            <div className="Counter">
                <h1>The Counter {this.state.counter}</h1>
                <button onClick={this.counterIncrease}>Counter Up</button>
                <button onClick={this.counterDecrease}>Counter Down</button>

            </div>
        )
    }





}


export default Counter