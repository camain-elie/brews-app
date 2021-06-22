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
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handlePositionClick = this.handlePositionClick.bind(this);

        this.state = {
            breweryName: '',
            location: '',
            breweryType: '',
            position: '',
        };

    }

    handleSearch (e, value) {
        e.preventDefault();
        this.setState({ breweryName: value });
        console.log('search');
        console.log(value);
    }

    handleTypeChange(event){
        console.log(event.target.value);
        this.setState({
            breweryType: event.target.value,
        })
    }

    handleLocation(event){
        this.setState({ location: event.target.value})
        console.log(event.target.value);
    }

    handlePositionClick(){
        if(this.state.position){
            this.setState({ position: '' });
        }else{
            this.setUserPosition();
        }
        
    }

    setUserPosition(){
        try{
            navigator.geolocation.getCurrentPosition(
                ((position) => {
                    let pos = position.coords.latitude + ',' + position.coords.longitude;
                    this.setState({ position: pos });
                }),
                error => console.error(error)
            )
        } catch(error){
            console.log(error);
            this.setState({ position: '36,-120' });
        }
    }

    render(){


        return(
            <div className="search-brew">
                
                <Search handleSearch={this.handleSearch} />
                <div className="search-brew__content" >

                    <Options 
                        handleTypeChange={this.handleTypeChange}
                        handleLocation={this.handleLocation}
                        handlePositionClick={this.handlePositionClick}    
                    />
                    <Breweries
                        name={this.state.breweryName}
                        location={this.state.location}
                        type={this.state.breweryType}
                        position={this.state.position}
                    />

                </div>
        
            </div>
        );
    }
}

export default SearchBrew;