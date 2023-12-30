import React from "react"
import classnames from "classnames"
import Grid from "@mui/material/Grid";
import Button from "@components/common/Button"
import Typography from "@components/common/Typography"
import SanitizeAndRenderHTML from "@components/common/SanitizeAndRenderHTML"
import SliderImage from '@assets/images/home_slider.png'
import './HomeSlider.scss'

export default function HomeSlider (props) {
    const {title, description, action, img} = props.data
    return <Grid container className={classnames('section homeSlider')}>
        <Grid item xs={12} sm={12} md={6} className={classnames('content')}>
            <Typography variant="h1">{title}</Typography>
            <SanitizeAndRenderHTML html={description} />
            <Button>{action}</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} className={classnames('image d-flex flex-align-center flex-justify-end')}>
            <img src={img || SliderImage} alt="Your Alt Text"  />
        </Grid>
    </Grid>
}