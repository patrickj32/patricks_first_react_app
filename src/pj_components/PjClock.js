import React from "react"

// in a class component, its "this" then ".props" and so on.
// there is also a contructor and a super props



class PjClock extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="PjClock">
                <h1>Hello from the clock, its {this.props.time}</h1>
            </div>
        )
    }
}

export default PjClock