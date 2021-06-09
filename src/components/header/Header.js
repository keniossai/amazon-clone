import { Search, ShoppingBasket } from '@material-ui/icons'
import  LocationOnOutlinedIcon  from '@material-ui/icons/LocationOnOutlined'
import React from 'react'
import './Header.css'

function Header() {
	return (
        <>
            <div className='header'>
                <img
                    className='headerLogo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    alt=''
                />
                <div className="headerLocation">
                    <LocationOnOutlinedIcon />
                </div>
                <div className='headerOption'>
                    <span className='headerOptionLineOne'>Deliver to</span>
                    <span className='headerOptionLineTwo'>Lagos</span>
                </div>
                <div className='headerSearch'>
                    <input
                        className='searchInput'
                        type='text'
                        placeholder='Search product...'
                    />
                    <Search className='searchIcon' />
                </div>
                <div className='headerNav'>
                    <div className='headerOption'>
                        <span className='headerOptionLineOne'>Hello' Guest</span>
                        <span className='headerOptionLineTwo'>Sign In</span>
                    </div>
                    <div className='headerOption'>
                        <span className='headerOptionLineOne'>Returns</span>

                        <span className='headerOptionLineTwo'>&Orders</span>
                    </div>
                    <div className='headerOption'>
                        <span className='headerOptionLineOne'>Your</span>
                        <span className='headerOptionLineTwo'>Prime</span>
                    </div>

                    <div className='headerBasket'>
                        <ShoppingBasket />
                        <span className='headerOptionLineTwo headerBasketCount'>0</span>
                    </div>
                </div>
            </div>
        </>
	)
}

export default Header
