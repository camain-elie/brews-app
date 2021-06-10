import { useState } from 'react';

import './Search.scss';

function Search (props) {
    const [value, setValue] = useState('');

    return(
        <div className="search">
            
            <div className="search__input">
                
                <p className={`search__icon ${value ? 'search__icon--text' : ''} material-icons-outlined`}>sports_bar</p>

                <form onSubmit={e => props.handleSearch(e, value)}>
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Complete name or part of the name of the brewery" />
                    <button type="submit" >Search</button>
                </form>
            </div>

        </div>
    );
}


export default Search;