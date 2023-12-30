import React from "react";
import classnames from "classnames";
import Grid from "@mui/material/Grid";
import Button from "@components/common/Button"
import Typography from "@components/common/Typography"
import BgImage from '@assets/images/email_subscribe.jpeg';
import './EmailSubscribe.scss'

export default function EmailSubscribe ({title, sub_title}) {
    return <Grid container className={classnames('section emailSubscribe')}>
        <Grid  xs={12} item className={classnames('header text-center')}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="p">{sub_title}</Typography>
        </Grid>
        <Grid xs={12} item className={classnames('content text-center')}>
            <Grid className={classnames('subscribeForm d-flex flex-align-center flex-justify-start')} style={{ backgroundImage: `url(${BgImage})` }}>
                <div className="form">
                    <input type="text" placeholder="Email" />
                    <Button>Subscribe</Button>
                </div>
            </Grid>
        </Grid>
    </Grid>
}