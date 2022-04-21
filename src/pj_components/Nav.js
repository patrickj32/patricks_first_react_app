import { Link } from "react-router-dom";


function Nav() {
    return (

        <div className="Navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/welcome">Welcome</Link>
                </li>
                <li>
                    <Link to="/customgreeting">CustomGreeting</Link>
                </li>
                <li>
                    <Link to="/pjclock">PjClock</Link>
                </li>
                <li>
                    <Link to="/pjclockwithstate">PjClockwithState</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/cheeseburger">Cheeseburger</Link>
                </li>
                <li>
                    <Link to="/cheeseburger/bacon">Bacon Cheeseburger</Link>
                </li>

                <li>
                    <Link to="/cheeseburger/shroom">Mushroom Cheeseburger</Link>
                </li>




            </ul>

        </div>

    )

}


export default Nav;