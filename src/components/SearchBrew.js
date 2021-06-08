import { Component } from 'react';

import Search from './Search';
import Options from './Options';
import Breweries from './Breweries';

class SearchBrew extends Component {

    handleSearch (e, value) {
        e.preventDefault();
        console.log('search');
        console.log(value);
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