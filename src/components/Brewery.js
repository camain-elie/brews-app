import { Link, withRouter } from 'react-router-dom';
import { Component } from 'react';

import './Brewery.scss';

const URL = "https://api.openbrewerydb.org/breweries/";

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

const getBreweryData = async (breweryId) => {
    const response = await fetch(`${URL}${breweryId}`);
    const data = await response.json();
    console.log(data);
    return data;
}


class Brewery extends Component {
    /*constructor(props){
        super(props);

        

        this.state = {
            breweryId: useParams(),
        }
    }*/

    componentDidMount(){
        const breweryId = this.props.match.params.breweryId;
        console.log(breweryId);
        console.log('did mount');
        getBreweryData(breweryId)
        .then(res => console.log(res))
        .catch(error => console.error(error));
    }

    render(){

        //console.log(this.state.breweryId);

        return(
            <div className="brewery">
            Brewery
            {/*breweryId*/}
            <Link to="/">Go back</Link>
        </div>
        )
    }
}


/*function Brewery (props) {

    let { breweryId } = useParams();
    const [ breweryData, setBreweryData ] = useState({});

    useEffect(() => {
        console.log('use effect')
        getBreweryData(breweryId)
        .then(res => setBreweryData(res))
        .catch(error => console.error(error))
    });

    console.log(breweryData);

    return(
        <div className="brewery">
            Brewery
            {breweryId}
            <Link to="/">Go back</Link>
        </div>
    );
}*/

export default withRouter(Brewery);