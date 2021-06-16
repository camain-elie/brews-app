import './Pages.scss';

function Pages(props){

    const pageMin = 1;
    const pageMax = props.totalPages;
    const currentPage = props.currentPage;

    let buttonTab = [{char: "<", action: () => console.log("+")}];

    for(let i = 1; i<=pageMax; i++){
        if((i===pageMin) || (i===pageMax) || (i >= currentPage-1 && i<= currentPage+1)){
            buttonTab.push({char: i, action: () => console.log(i)});
        }else{
            if((i===currentPage-2) || (i===currentPage+2)){
                buttonTab.push({char: "...", action: () => console.log("")});
            }
        }

    }

    buttonTab.push({char: ">", action: () => console.log("<")});

    return(
        <div>
            {buttonTab.map((item, index) => {
                return(
                    <div key={index} onClick={item.action} >
                        {item.char}{item.char == currentPage ? "*" : ""}
                    </div>
                )
            })}       
        </div>
    );
}

export default Pages;
