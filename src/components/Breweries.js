import { Component } from 'react';
import { Link } from 'react-router-dom';

import Pages from './Pages';
import { howLongAgo } from './Helpers';

import './Breweries.scss';

const API_URL = "https://api.openbrewerydb.org/breweries?per_page=50";

const getBrews = async () => {
    const response = await fetch(API_URL);
    const jsonData = await response.json();
    return jsonData;
}


class Breweries extends Component{
    constructor(props){
        super(props);

        this.changeOnePage = this.changeOnePage.bind(this);
        this.changeToPage = this.changeToPage.bind(this);

        this.state = {
            currentPage: 1,
            totalPages: 1,
            breweryList: [],
        }
    }

    componentDidMount(){
        getBrews()
        .then( res => this.setState({ 
            breweryList: res,
            currentPage: 1,
            totalPages: Math.ceil(res.length/5),
        }))
        .catch( error => console.error(error))
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
        console.log(this.state.breweryList)
        console.log(breweries);

        result = breweries.map((item, index) => {
            return(
                <Link key={index} to={`/brewery/${item.id}`}>
                    <div>

                        <p className="material-icons" >sports_bar</p>

                        <div>

                            <p>{item.name}</p>

                            <p>{item.brewery_type}</p>

                        </div>
                        <div>

                            <p><span className="material-icons" >public</span>
                                {item.city}{item.city && item.country ? " - " : ""}{item.country}
                            </p>

                            <p><span className="material-icons" >schedule</span>
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

        const results = this.generateResults();

        return(
            <div className="breweries">

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