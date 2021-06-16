import { Component } from 'react';

import './Options.scss';

class Options extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: ''
        }
    }

    render(){
        return(
            <div className="options">
                <div className="options__group">
                    <p className="options__name">BREWERY TYPE</p>
                    <select value={this.state.value} onChange={() => console.log('change')} >
                        <option value="">All</option>
                        <option value="micro">Micro</option>
                        <option value="nano">Nano</option>
                        <option value="regional">Regional</option>
                        <option value="brewpub">Brewpub</option>
                        <option value="large">Large</option>
                        <option value="planning">Not yet opened</option>
                        <option value="constract">On contract brewery</option>
                        <option value="proprietor">Proprietor</option>
                        <option value="closed">Closed</option>
                    </select>
                </div>
            
                <div className="options__group">
                    <p className="options__name">LOCATION</p>
                    <div className="options__input">
                        <p className={`material-icons options__label${this.state.value !== "" ? "--text" : ""}`}>public</p>
                        <input type="text" placeholder="City, state, zip code or country" value={this.state.value} onChange={e => this.setState({value: e.target.value})} />
                        <p className="material-icons options__position" onClick={() => console.log('gps')} >gps_fixed</p>
                    </div>

                    <div className="options__radio" onChange={event => console.log(event.target.value)}>
                        <div><input type="radio" value="london" name="location" />London</div>
                        <div><input type="radio" value="edimburgh" name="location" />Edimburgh</div>
                        <div><input type="radio" value="new_york" name="location" />New York</div>
                        <div><input type="radio" value="los_angeles" name="location" />Los Angeles</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Options;