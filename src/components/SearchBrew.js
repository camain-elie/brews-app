import { Component } from 'react';

import Search from './Search';
import Options from './Options';
import Breweries from './Breweries';

import './SearchBrew.scss';


/*const getBreweryData = async (breweryId) => {
    //const response = await fetch(`${URL}${breweryId}`);
    const response = await fetch(`https://api.allorigins.win/raw?url=https://api.openbrewerydb.org/breweries/9387`);
    console.log(response);
    const data = await response.json();
    console.log(data);

}*/

/*const getBrews = async () => {
    const response = await fetch("https://api.openbrewerydb.org/breweries");
    const json = await response.json();
    console.log(json);
}*/

class SearchBrew extends Component {
    constructor(props){
        super(props);

        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            breweryName: '',
            location: '',
        };

    }

    handleSearch (e, value) {
        e.preventDefault();
        this.setState({ breweryName: value });
        console.log('search');
        console.log(value);
    }

    /*componentDidMount(){
        console.log('did mount');
        getBrews();
        
    }*/

    render(){


        return(
            <div className="search-brew">
                
                <Search handleSearch={this.handleSearch} />
                <div className="search-brew__content" >

                    <Options />
                    <Breweries name={this.state.breweryName} />

                </div>
        
            </div>
        );
    }
}

export default SearchBrew;