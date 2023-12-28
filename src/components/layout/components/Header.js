import React from "react";
import classnames from "classnames";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconCart from '@components/icons/IconCart';
import Logo from '@assets/images/logo.png';
import './Header.scss'

export default function Header () {
    return <Grid container className="header" xs={{justifyContent: 'space-between'}}>
        <Grid item xs={12} sm={6} md={6} className={classnames('logo d-flex flex-align-center flex-justify-start')}>
            <img src={Logo} alt="Your Alt Text" height="90px" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classnames('navi-cart d-flex flex-align-center flex-justify-end')}>
            <div className={classnames('navi d-flex flex-align-center')}>
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className={classnames('cart d-flex flex-align-center')}>
                <IconCart />
            </div>
        </Grid>
    </Grid>
}