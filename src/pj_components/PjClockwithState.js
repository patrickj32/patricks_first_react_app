import React from "react"

// in a class component, its "this" then ".props" and so on.
// there is also a contructor and a super props

// *props are passed in, we have to give it something*
// *state is not passed in, we create it inside the constructor*

// ****if you want "state", USE A CLASS COMPONENT***
class PjClockwithState extends React.Component {
    constructor(props) {
        super(props)

        // this is where im creating the state object

        // ***we use state for things we want to keep track of overtime. Things that will display to a user****

        // React cares that you call it "state". You cant name it whatever.
        this.state = {
            time: new Date(),
            name: 'Patrick'
        }
    }

    nameUpdate = () => {
        this.setState({ name: "Eric" })

    }
    nameUpdateBob = () => {
        this.setState({ name: "Bob" })

    }


    startClock = () => {
        
        this.timerPoop = setInterval(()=>{

            this.setState({ time: new Date() })

        }, 1000)

        
    }
// this has nothing to do with state. stopClock literally stops the clock from updating
    stopClock = () => {

        clearInterval(this.timerPoop)

    }    

    render() {
        return (
            <div className="PjClockwithState">
                <h1>State time is {this.state.time.toLocaleTimeString()} my name is {this.state.name}</h1>
                <button onClick={this.nameUpdate}>Update name to Eric</button>
                <button onClick={this.startClock}>Start Clock</button>
                <button onClick={this.stopClock}>Stop Clock</button>
                <button onClick={this.nameUpdateBob}>Update name to Bob</button>
             
            </div>
        )
    }
}

export default PjClockwithState