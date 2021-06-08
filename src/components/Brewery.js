import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import './Brewery.scss';

/*class Brewery extends Component {


    render () {
        let { breweryId } = useParams();

        return(
            <div className="brewery">
                Brewery
                {breweryId}
                <Link to="/">Go back</Link>
            </div>
        );
    }
}*/

const URL = "https://api.openbrewerydb.org/breweries/";

const getBreweryData = async (breweryId) => {
    //const response = await fetch(`${URL}${breweryId}`);
    const response = await fetch(`https://api.openbrewerydb.org/breweries/9387`);
    console.log(response);
}


function Brewery (props) {

    let { breweryId } = useParams();

    useEffect((breweryId) => {
        console.log('use effect')
        getBreweryData(breweryId);
    });

    return(
        <div className="brewery">
            Brewery
            {breweryId}
            <Link to="/">Go back</Link>
        </div>
    );
}

export default Brewery;