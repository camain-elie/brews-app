import { Component } from 'react';

import './Options.scss';

class Options extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: '',
            breweryType: '',
            position: false,
        }
    }

    handleLocation(event){
        this.setState({ location: event.target.value });
        this.props.handleLocation(event);
    }

    handlePositionClick(){
        this.setState({ position: !this.state.position });
        this.props.handlePositionClick();
    }

    render(){
        return(
            <div className="options">
                <div className="options__group">
                    <p className="options__name">BREWERY TYPE</p>
                    <select value={this.state.breweryType} onChange={e => {
                            this.setState({ breweryType: e.target.value })
                            this.props.handleTypeChange(e)
                        }}
                    >
                        <option value="">All</option>
                        <option value="micro">Micro</option>
                        <option value="nano">Nano</option>
                        <option value="regional">Regional</option>
                        <option value="brewpub">Brewpub</option>
                        <option value="large">Large</option>
                        <option value="planning">Not opened yet</option>
                        <option value="contract">On contract brewery</option>
                        <option value="proprietor">Proprietor</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>
            
                <div className="options__group">
                    <p className="options__name">LOCATION</p>
                    <div className="options__input">
                        <p className={`material-icons options__label${this.state.location !== "" ? "--text" : ""}`}>public</p>
                        <input type="text" placeholder="Enter a city" value={this.state.location} 
                            onChange={e => {
                                this.setState({location: e.target.value});
                                this.props.handleLocation(e);
                            }} 
                        />
                        <p className={`material-icons options__position${this.props.position ? '--active' : ''}`} onClick={() => this.handlePositionClick()} >gps_fixed</p>
                    </div>

                    <div className="options__radio" >
                        <div><input onChange={event => this.handleLocation(event)} type="radio" value="London" name="location" checked={this.state.location === 'London'} />London</div>
                        <div><input onChange={event => this.handleLocation(event)} type="radio" value="Dublin" name="location" checked={this.state.location === 'Dublin'} />Dublin</div>
                        <div><input onChange={event => this.handleLocation(event)} type="radio" value="New York" name="location" checked={this.state.location === 'New York'} />New York</div>
                        <div><input onChange={event => this.handleLocation(event)} type="radio" value="Los Angeles" name="location" checked={this.state.location === 'Los Angeles'} />Los Angeles</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Options;