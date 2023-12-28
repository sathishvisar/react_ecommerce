import React from "react";
import classnames from "classnames";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import BgImage from '@assets/images/full_content_bg.png';
import CustomButton from "@components/inputs/CustomButton"
import './ContentOneColWithBg.scss'

export default function HomeSlider (props) {
    const {title, description_1, description_2, action, bg_img} = props.data

    return <Grid container className={classnames('contentOneColWithBg')} style={{ backgroundImage: `url(${bg_img || BgImage})` }}>
        <Grid xs={12} item className={classnames('content')}>
            <h2>{title}</h2>
            <p>{description_1}</p>
            <p>{description_2}</p>
           <Grid className={classnames('text-center')} style={{marginTop: '74px'}}>
            <CustomButton>{action}</CustomButton>
           </Grid>
        </Grid>
    </Grid>
}