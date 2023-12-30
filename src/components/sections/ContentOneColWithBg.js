import React from "react";
import classnames from "classnames";
import Grid from "@mui/material/Grid";
import BgImage from '@assets/images/full_content_bg.png';
import Button from "@components/common/Button"
import Typography from "@components/common/Typography"
import SanitizeAndRenderHTML from "@components/common/SanitizeAndRenderHTML"
import './ContentOneColWithBg.scss'

export default function HomeSlider (props) {
    const {title, description, action, bg_img} = props.data

    return <Grid container className={classnames('section contentOneColWithBg')} style={{ backgroundImage: `url(${bg_img || BgImage})` }}>
        <Grid item xs={12} className={classnames('header text-center')}>
            <Typography variant="h2">{title}</Typography>
        </Grid>
        <Grid item xs={12} className={classnames('content')}>
            <SanitizeAndRenderHTML html={description}/>
           <Grid className={classnames('text-center')} style={{marginTop: '74px'}}>
            <Button>{action}</Button>
           </Grid>
        </Grid>
    </Grid>
}