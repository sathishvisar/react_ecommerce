import React from "react";
import classnames from "classnames";
import Grid from "@mui/material/Grid";
import Typography from "@components/common/Typography"
import SanitizeAndRenderHTML from "@components/common/SanitizeAndRenderHTML"
import BgImage from '@assets/images/about_banner.png';
import './BannerFullwidth.scss'

export default function BannerFullwidth (props) {
    const {title, description} = props.data

    return <Grid container className={classnames('section bannerFullwidth')} style={{ backgroundImage: `url(${BgImage})` }}>
        <Grid item xs={10} className={classnames('content text-center')}>
            <Typography variant="h2">{title}</Typography>
            {/* <Typography variant="p">{description}</Typography> */}
            <SanitizeAndRenderHTML html={description} />
        </Grid>
    </Grid>
}