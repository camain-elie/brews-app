import { Link } from 'react-router-dom';

import './Header.scss';

function Header () {
    return(
        <div className="header">
            <Link to='/'>
                <p><span>Brews</span> App</p>
            </Link>
        </div>
    );
}

export default Header;