import React from "react"

// in a class component, its "this" then ".props" and so on.
// there is also a contructor and a super props

// *props are passed in, we have to give it something*
// *state is not passed in, we create it inside the constructor*
class PjClockwithState extends React.Component {
    constructor(props) {
        super(props)

        // this is where im creating the state object
        this.state = {
            timeWithState: '11:00',
            name: 'Patrick'
        }
    }

    nameUpdate = () => {
        this.setState({ name: "Eric" })

    }
    render() {
        return (
            <div className="PjClockwithState">
                <h1>State time is {this.state.timeWithState} my name is {this.state.name}</h1>
                <button onClick={this.nameUpdate}>Update name to Eric</button>
            </div>
        )
    }
}

export default PjClockwithState