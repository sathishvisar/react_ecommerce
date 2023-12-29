import React from "react";
import classnames from "classnames";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Button from "@components/common/Button"
import Typography from "@components/common/Typography"
import BgImage from '@assets/images/email_subscribe.jpeg';
import './EmailSubscribe.scss'

export default function EmailSubscribe (props) {
    const {title, sub_title, action, bg_img} = props.data
    return <Grid container className={classnames('section emailSubscribe')}>
        <Grid  xs={12} className={classnames('header text-center')}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="p">{sub_title}</Typography>
        </Grid>
        <Grid xs={12} item className={classnames('content text-center')}>
            <Grid className={classnames('subscribeForm d-flex flex-align-center flex-justify-start')} style={{ backgroundImage: `url(${bg_img || BgImage})` }}>
                <div className="form">
                    <input type="text" placeholder="Email" />
                    <Button>{action}</Button>
                </div>
            </Grid>
        </Grid>
    </Grid>
}