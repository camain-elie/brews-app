import './Pages.scss';

function Pages(props){

    if(props.totalPages < 2){
        return(
            <div className="pages"></div>
        );
    }

    const pageMin = 1;
    const pageMax = props.totalPages;
    const currentPage = props.currentPage;
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

export default Pages;