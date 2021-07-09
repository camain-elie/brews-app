import { Component } from 'react';

import Search from '../search/Search';
import Options from '../options/Options';
import Breweries from '../breweries/Breweries';

import './SearchBrew.scss';

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
        try{
            e.preventDefault();
        }catch(error){

        }
        this.setState({ breweryName: value });
    }

    handleTypeChange(event){
        this.setState({
            breweryType: event.target.value,
        });
    }

    handleLocation(event){
        this.setState({ location: event.target.value});
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
            );
        } catch(error){
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
                        position={this.state.position}   
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