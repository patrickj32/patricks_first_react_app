function CustomGreeting (props) {

    
    let age = props.age || "idk"

    return (
        <div className="CustomGreeting">
            <h1>Greetings, {props.userName} you are {age} </h1>
        </div>
    );
}

export default CustomGreeting ;