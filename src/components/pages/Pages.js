import PropTypes from 'prop-types';

import './Pages.scss';

function Pages(props){

    if(props.totalPages < 2){
        return null;
    }

    const pageMin = 1;
    const pageMax = props.totalPages;
    let currentPage = props.currentPage;
    if(currentPage > pageMax){
        currentPage = pageMax;
    }
    if(currentPage<1){
        currentPage = 1;
    }
    if(!currentPage){
        currentPage=1;
    }
    let buttonTab = [];

    for(let i = 1; i<=pageMax; i++){
        if((i===pageMin) || (i===pageMax) || (i >= currentPage-1 && i<= currentPage+1)){
            buttonTab.push(i);
        }else{
            if((i===currentPage-2) || (i===currentPage+2)){
                buttonTab.push("...");
            }
        }
    }

    return(
        <div className="pages">

            <div className={`pages__arrow${currentPage === pageMin ? "--disabled" : ""}`}
                onClick={() => props.changeOnePage(-1)} >
                <p className="material-icons">
                    chevron_left
                </p>
            </div>  

            {buttonTab.map((item, index) => {
                if(item === "..."){
                    return(
                    <div className="pages__more" key={index} >
                        <p>{item}</p>
                    </div>
                    );
                }

                return(
                    <div className={`pages__number ${item === currentPage ? "pages__number--current" : ""}`}
                        key={index}
                        onClick={() => props.changeToPage(item)}
                    >
                        <p>{item}</p>
                    </div>
                );
            })}

            <div className={`pages__arrow${currentPage === pageMax ? "--disabled" : ""}`}
                onClick={() => props.changeOnePage(1)} >
                <p className="material-icons">
                    chevron_right
                </p>
            </div>     
        </div>
    );
}

Pages.propTypes = {
    totalPages: function(props, propName, componentName){
        if(props[propName] < 0){
            return new Error(
                'Invalid prop "' + propName + '" supplied to "' + componentName + '". "' +
                propName + '" must be a positive Integer nunber.'
            )
        }
        if(typeof props[propName] != 'number'){
            return new Error(
                'Invalid prop "' + propName + '" supplied to "' + componentName + '". "' +
                propName + '" must be of type "Number".'
            )
        }
    } ,
    currentPage: function(props, propName, componentName){
        if(typeof props[propName] != 'number'){
            return new Error(
                'Invalid prop "' + propName + '" supplied to "' + componentName + '". "' +
                propName + '" must be of type "Number".'
            )
        }
        if(props[propName] < 0 || props[propName] > props['totalPages']){

            return new Error(
                'Invalid prop "' + propName + '" supplied to "' + componentName + '". "' +
                propName + '" must be between 0 and the value of "totalPages" prop.'
            )
        }
    },
    changeOnePage: PropTypes.func.isRequired,
    changeToPage: PropTypes.func.isRequired,
}

export default Pages;
