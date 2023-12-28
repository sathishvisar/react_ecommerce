import React from "react";
import classnames from "classnames";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import CustomButton from "@components/inputs/CustomButton"
import BgImage from '@assets/images/email_subscribe.jpeg';
import './EmailSubscribe.scss'

export default function EmailSubscribe (props) {
    const {title, sub_title, action, bg_img} = props.data
    return <Grid container className={classnames('emailSubscribe')}>
        <Grid xs={12} item className={classnames('content text-center')}>
            <h2>{title}</h2>
            <h3>{sub_title}</h3>
            <Grid className={classnames('subscribeForm d-flex flex-align-center flex-justify-start')} style={{ backgroundImage: `url(${bg_img || BgImage})` }}>
                <div className="form">
                    <input type="text" placeholder="Email" />
                    <CustomButton>{action}</CustomButton>
                </div>
            </Grid>
        </Grid>
    </Grid>
}