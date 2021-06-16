import { Component } from 'react';

import Pages from './Pages';

import './Breweries.scss';


class Breweries extends Component{
    constructor(props){
        super(props);



        this.state = {
            currentPage: 1,
            totalPages: 10
        }
    }

    componentDidMount(){
        console.log('breweries did mount');
    }


    render() {
        return(
            <div className="breweries">
                breweries

                <Pages currentPage={10} totalPages={10} />
            </div>
        )
    };
}

export default Breweries;