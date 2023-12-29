import React from "react";
import classnames from "classnames";
import { Grid } from "@mui/material";
import Category from "@components/products/Category"
import Typography from "@components/common/Typography"
import "./ProductCategories.scss"


export default function ProductCategories (props) {
    const {title, sub_title} = props.data
    return <Grid container className={classnames('section productCategories')}>
        <Grid  xs={12} className={classnames('header text-center')}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="p">{sub_title}</Typography>
        </Grid>
        <Grid xs={12} item className={classnames('content text-center')}>
            <Grid container className={classnames('categories')} spacing={3} wrap="wrap">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Grid key={item} item xs={12} sm={6} md={4} lg={4}>
                        <Category />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>
}