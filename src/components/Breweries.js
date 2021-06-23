import { Component } from 'react';
import { Link } from 'react-router-dom';

import Pages from './Pages';
import { howLongAgo } from './Helpers';

import './Breweries.scss';

const API_URL = "https://api.openbrewerydb.org/breweries?per_page=50";


class Breweries extends Component{
    constructor(props){
        super(props);

        this.changeOnePage = this.changeOnePage.bind(this);
        this.changeToPage = this.changeToPage.bind(this);

        this.state = {
            currentPage: 1,
            totalPages: 1,
            breweryList: [],
            breweryName: this.props.name,
            breweryType: this.props.type,
            breweryLocation: this.props.location,
            userPosition: this.props.position,
        }
    }

    componentDidMount(){
        this.getBrews()
        .then( res => this.setState({ 
            breweryList: res,
            currentPage: 1,
            totalPages: Math.ceil(res.length/5),
        }))
        .catch( error => console.error(error))
    }



    /*componentDidUpdate(){
        this.getBrews()
        .then( res => this.setState({ 
            breweryList: res,
            currentPage: 1,
            totalPages: Math.ceil(res.length/5),
        }))
        .catch( error => console.error(error))
    }*/
    

    getBrews = async () => {
        const url = this.getURL();
        const response = await fetch(url);
        const jsonData = await response.json();
        return jsonData;
    }

    getURL(){
        console.log(this.props.location)
        let name, location;
        if(this.props.name){
            name = (this.props.name.split(' ')).join('_');
        }

        if(this.props.location){
            location = (this.props.location.split(' ')).join('_').toLowerCase();
        }

        let url = `${API_URL}${name ? `&by_name=${name}` : ''}${this.props.type ? `&by_type=${this.props.type}` : ''}${location ? `&by_city=${location}` : ''}${this.props.position ? `&by_dist=${this.props.position}` : ''}`;
        console.log(url)
        return url;
    }

    changeOnePage(value){
        if(!(this.state.currentPage === 1 && value < 0)
            && !(this.state.currentPage === this.state.totalPages && value > 0 )){
            this.setState({ currentPage: this.state.currentPage + value });
        }
    }

    changeToPage(value){
        if(Number.isInteger(value)){
            this.setState({ currentPage: value })
        }
    }

    generateResults(){
        let result;
        const state = this.state;

        const breweries = state.breweryList.slice((state.currentPage-1)*5, state.currentPage*5);
        
        if(!breweries.length){
            return (
                <div className="breweries__no-result">
                    <p className="material-icons">sentiment_very_dissatisfied</p>
                    <p>We are sorry, we did not find any result, try again !</p>
                </div>
            );
        }

        result = breweries.map((item, index) => {
            return(
                <Link className="breweries__element" key={index} to={`/brewery/${item.id}`}>
                
                    <p className="material-icons breweries__image" >sports_bar</p>

                    <div className="breweries__wrapper">
                        <div className="breweries__description">

                            <p>{item.name}</p>

                            <p className="breweries__type">{item.brewery_type}</p>

                        </div>
                        <div className="breweries__info">

                            <p className="breweries__icon"><span className="material-icons" >public</span>
                                {item.city}{item.city && item.country ? " - " : ""}{item.country}
                            </p>

                            <p className="breweries__icon"><span className="material-icons" >schedule</span>
                                {howLongAgo(item.updated_at)}
                            </p>

                        </div>
                    </div>
                  
                </Link>
            );
        });
        
        return result;
    }

    render() {        
        const state = this.state;
        console.log(this.props)

        if((this.props.name !== state.breweryName) || (this.props.type !== state.breweryType)
            || (this.props.location !== state.breweryLocation) || (this.props.position !== state.userPosition)){
            console.log('update')
            this.getBrews()
            .then( res => this.setState({ 
                breweryList: res,
                currentPage: 1,
                totalPages: Math.ceil(res.length/5),
                breweryName: this.props.name,
                breweryType: this.props.type,
                breweryLocation: this.props.location,
                userPosition: this.props.position,
            }))
            .catch( error => console.error(error))
        }

        const results = this.generateResults();

        return(
            <div className="breweries" name={this.props.name} type={this.props.type}>

                {results}

                <Pages currentPage={state.currentPage}
                    totalPages={state.totalPages}
                    changeOnePage={this.changeOnePage}
                    changeToPage={this.changeToPage}
                />

            </div>
        )
    };
}

export default Breweries;