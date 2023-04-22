import React from 'react'
import './Header.css'
// For Search Icons
import SearchIcon from '@mui/icons-material/Search';
// For Cart Icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-symbol-png-logo-vector-9.png" alt="amazon logo" />

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className='header__SearchIcon' />
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionlineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionlineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionlineOne">
                        Returns  </span>
                    <span className="header__optionlineTwo">
                        &Orders </span>
                </div>
                <div className="header__option">
                    <span className="header__optionlineOne">
                        Your
                    </span>
                    <span className="header__optionlineTwo">
                        Prime
                    </span>
                </div>
                <div className="header__optionBasket">
                <ShoppingCartIcon />
                <span className="header__optionLineTwo header__basketCount">0</span>
                </div>

            </div>
        </div>
    )
}

export default Header
