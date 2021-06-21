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
        console.log(this.props.name)

        this.state = {
            currentPage: 1,
            totalPages: 1,
            breweryList: [],
            breweryName: this.props.name,
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
        let name;
        if(this.props.name){
            name = (this.props.name.split(' ')).join('_');
        }
        let location = '';
        let url = `${API_URL}${name ? `&by_name=${name}` : ''}${location}`;
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
        //console.log(this.state.breweryList)
        //console.log(breweries);

        result = breweries.map((item, index) => {
            return(
                <Link className="breweries__element" key={index} to={`/brewery/${item.id}`}>
                
                        <p className="material-icons breweries__image" >sports_bar</p>

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
                  
                </Link>
            );
        });
        
        return result;
    }

    render() {        
        const state = this.state;

        if(this.props.name !== state.breweryName){
            this.getBrews()
            .then( res => this.setState({ 
                breweryList: res,
                currentPage: 1,
                totalPages: Math.ceil(res.length/5),
                breweryName: this.props.name,
            }))
            .catch( error => console.error(error))
        }

        const results = this.generateResults();

        return(
            <div className="breweries" key={this.props.name}>

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