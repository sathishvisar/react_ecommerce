import React from "react";
import classnames from "classnames";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Logo from '@assets/images/logo.png';
import google_play from '@assets/images/google_play.png';
import apple from '@assets/images/apple.png';
import cards from '@assets/images/cards.png';
import IconTwitter from '@components/icons/IconTwitter';
import IconInstagram from '@components/icons/IconInstagram';
import IconWhatsapp from '@components/icons/IconWhatsapp';
import IconYoutTube from '@components/icons/IconYoutTube';

import './Footer.scss'

export default function Footer () {
    return <Grid container className="footer">
        <Grid item xs={12} sm={12} md={6} lg={2} className={classnames('col logo')}>
            <img src={Logo} alt="Your Alt Text" height="90px" />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} className={classnames('col navi')}>
            <h6>Navigation</h6>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
                <li>Testimonial</li>
                <li>TestiContactmonial</li>
            </ul>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} className={classnames('col contact')}>
            <h6>Contact Us</h6>
            <p>For all inquiries contact
                @womenfashiontrend.net or
                head over to our Contact page and
                send us a message.</p>
                <div className="socialMedia">
                    <IconTwitter />
                    <IconInstagram />
                    <IconWhatsapp />
                    <IconYoutTube />
                </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} className={classnames('col app')}>
            <h6>Install the app</h6>
            <span>Lorem ipsum dolor sit amet consectetur</span>
            <div className={classnames('appStore d-flex flex-align-center flex-justify-between')}>
                <img alt="Your Alt Text" src={google_play} />
                <img alt="Your Alt Text" src={apple} />
            </div>
            <span>Lorem ipsum dolor sit amet consectetur</span>
            <img alt="Your Alt Text" className="cards" src={cards} />
        </Grid>
    </Grid>
}