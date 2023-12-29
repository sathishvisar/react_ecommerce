import React from "react";
import classnames from "classnames";
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import IconCart from '@components/icons/IconCart';
import Logo from '@assets/images/logo.png';
import './Header.scss'

export default function Header () {
    return <Grid container className="mainHeader" xs={{justifyContent: 'space-between'}}>
        <Grid item xs={12} sm={6} md={6} className={classnames('logo d-flex flex-align-center flex-justify-start')}>
            <img src={Logo} alt="Your Alt Text" height="90px" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} className={classnames('navi-cart d-flex flex-align-center flex-justify-end')}>
            <div className={classnames('navi d-flex flex-align-center')}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className={classnames('cart d-flex flex-align-center')}>
                <IconCart />
            </div>
        </Grid>
    </Grid>
}