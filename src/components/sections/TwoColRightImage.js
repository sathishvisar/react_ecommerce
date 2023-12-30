import React from "react";
import classnames from "classnames";
import Grid from "@mui/material/Grid";
import Typography from "@components/common/Typography"
import SanitizeAndRenderHTML from "@components/common/SanitizeAndRenderHTML"
import BgImage from '@assets/images/about_2_col.png';
import './TwoColRightImage.scss'

export default function TwoColRightImage (props) {
    const {title, description} = props.data

    return <Grid container className={classnames('section twoColRightImage two-col')}>
        <Grid item xs={12} md={6}  className={classnames('content')}>
            <Typography variant="h3">{title}</Typography>
            <SanitizeAndRenderHTML html={description} />
        </Grid>
        <Grid item xs={12} md={6}  className={classnames('imageCol')} style={{ backgroundImage: `url(${BgImage})` }}>

        </Grid>
    </Grid>
}