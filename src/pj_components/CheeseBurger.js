// We're gonna use URL parameters in this one.
import {useParams} from 'react-router-dom'

function CheeseBurger(props) {
let PJparems = useParams()
let typeOfCheeseBurger = PJparems.type || 'plain'

    return (
        <div >
            <h1>Im a {typeOfCheeseBurger} cheeseburger </h1>
        </div>
    );

}

export default CheeseBurger;