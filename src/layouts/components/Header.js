import React from "react";
import classnames from "classnames";
import { Link, useLocation} from 'react-router-dom';
import Grid from "@mui/material/Grid";
import IconCart from '@components/icons/IconCart';
import Logo from '@assets/images/logo.png';
import './Header.scss'

export default function Header () {
    const location = useLocation();
    const currentPath = location.pathname;
    return <Grid container className="mainHeader">
        <Grid item sm={6} md={6} className={classnames('logo d-flex flex-align-center flex-justify-start')}>
            <Link to="/"><img src={Logo} alt="Your Alt Text" height="90px" /></Link>
        </Grid>
        <Grid item sm={6} md={6} className={classnames('navi-cart d-flex flex-align-center flex-justify-end')}>
            <div className={classnames('navi d-flex flex-align-center')}>
                <ul>
                    <li className={currentPath === '/' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={currentPath === '/shop' ? 'active' : ''}>
                        <Link to="/shop">Shop</Link>
                    </li>
                    <li className={currentPath === '/about' ? 'active' : ''}>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className={currentPath === '/contact' ? 'active' : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className={classnames('cart d-flex flex-align-center')}>
                <IconCart />
            </div>
        </Grid>
    </Grid>
}