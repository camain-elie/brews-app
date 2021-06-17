import { Component } from 'react';

import Search from './Search';
import Options from './Options';
import Breweries from './Breweries';


/*const getBreweryData = async (breweryId) => {
    //const response = await fetch(`${URL}${breweryId}`);
    const response = await fetch(`https://api.allorigins.win/raw?url=https://api.openbrewerydb.org/breweries/9387`);
    console.log(response);
    const data = await response.json();
    console.log(data);

}*/

const getBrews = async () => {
    const response = await fetch("https://api.openbrewerydb.org/breweries");
    const json = await response.json();
    console.log(json);
}

class SearchBrew extends Component {

    handleSearch (e, value) {
        e.preventDefault();
        console.log('search');
        console.log(value);
    }

    componentDidMount(){
        console.log('did mount');
        getBrews();
        
    }

    render(){


        return(
            <div className="searchjob">
                
                <Search handleSearch={this.handleSearch} />
                <Options />
                <Breweries />

            </div>
        );
    }
}

export default SearchBrew;