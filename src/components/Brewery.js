import { Link, withRouter } from 'react-router-dom';
import { Component } from 'react';
import { howLongAgo } from './Helpers';

import './Brewery.scss';

const URL = "https://api.openbrewerydb.org/breweries/";

const getBreweryData = async (breweryId) => {
    const response = await fetch(`${URL}${breweryId}`);
    const data = await response.json();
    return data;
}

class Brewery extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false,
        };
    }

    componentDidMount(){
        const breweryId = this.props.match.params.breweryId;
        getBreweryData(breweryId)
        .then(res => {
            this.setState({ data: res, isLoading: true })
        })
        .catch(error => console.error(error));
    }

    render(){

        const state = this.state;

        return(
            <div className="brewery">
            
                {state.isLoading &&
                    <div className="brewery__page">
                        <div className="brewery__side">
                            <Link to="/">
                                <p className="brewery__back"><span className="brewery__back-icon material-icons">trending_flat</span>Back to search</p>
                            </Link>

                            <div className="brewery__contact">
                                <h2>HOW TO CONTACT US</h2>
                                {state.data.phone && 
                                    <p className=""><span className="material-icons brewery__icon">call</span> {state.data.phone}</p>
                                }
                                {state.data.website_url &&
                                    <a className="brewery__link" href={state.data.website_url} target="_blank" rel='noreferrer noopener' >{state.data.website_url}</a>
                                }
                                <div className="brewery__address">
                                    {state.data.street && <p>{state.data.street}</p>}
                                    {state.data.address_2 && <p>{state.data.address_2}</p>}
                                    {state.data.address_3 && <p>{state.data.address_3}</p>}
                                    {(state.data.postal_code || state.data.city) && <p>{state.data.postal_code + ' ' + state.data.city}</p>}
                                    <p>{state.data.state ? state.data.state + ', ' : ''}{state.data.country}</p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="brewery__content">

                            <div className="brewery__name">
                                <h1>{state.data.name}</h1>
                                <p className="brewery__type">{state.data.brewery_type}</p>
                            </div>

                            <p className="brewery__icon-text"><span className="material-icons brewery__icon">schedule</span> {howLongAgo(state.data.updated_at)}</p>
                            <p className="brewery__icon-text"><span className="material-icons brewery__icon">public</span> {state.data.city}{state.data.city && state.data.country ? " - " : ""}{state.data.country}</p>

                            <div className="brewery__description">
                                <p className="brewery__description--note">Note : as the API does not provide a description for each brewery, the following description will be the same for every brewery.</p>
                                <p>This brewery company is an independent craft brewery located in Beer City in the Hoppy District.
                                    It is Beer City's first brewery, and also the oldest brewery of the country !</p>
                                <p>We produce around 1200 gallons a month, although we sell onlly about half of that. The second half seems to always be missing, due to... hum... mysterious reasons 😇</p>
                                <p>I will have to be honnest here, my imagination just ran out and I am getting fed up of writting so... I hope nobody is reading this far.
                                    Cause this won't get any more interesting. And I am sure you have better things to do. Won't you go clean the dishes, or make some fantastic projects ?
                                    Really, instead of reading all of that, you could have accomplished your dreams.</p>
                                <p>Well maybe not, but still. Go play the piano, write a poem or better, enjoy a beer in the company of your beloved friends ! What ? Don't have any friends ?
                                    Hum... lucky you ! I happen to just have a few beers in the fridge and I'm probably only a few thousands miles away, so... come over dude ! In the meanwhile,
                                    have a great day ! See ya !
                                </p>
                                <p className="brewery__description--note">
                                    Pfew... that was exausting !
                                </p>
                            </div>
                            
                            
                            <div className="brewery__website">
                                {this.state.data.website_url ? 
                                    (<iframe title="Brewery's website" src={this.state.data.website_url}></iframe>) :
                                    (<p>It looks like this brewery does not have any website !</p>)
                                }
                            </div>
                        </div>
                    </div>                    
                }
            </div>
        );
    }
}

export default withRouter(Brewery);