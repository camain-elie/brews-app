import { Component } from 'react';

import Pages from './Pages';

import './Breweries.scss';


class Breweries extends Component{
    constructor(props){
        super(props);

        this.changeOnePage = this.changeOnePage.bind(this);
        this.changeToPage = this.changeToPage.bind(this);

        this.state = {
            currentPage: 1,
            totalPages: 10
        }
    }

    componentDidMount(){
        console.log('breweries did mount');
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

    render() {

        const state = this.state;

        return(
            <div className="breweries">
                breweries

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