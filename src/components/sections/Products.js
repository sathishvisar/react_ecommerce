import React from "react";
import classnames from "classnames";
import { Grid } from "@mui/material";
import Product from "@components/products/Product"
import Typography from "@components/common/Typography"
import "./Products.scss"


export default function ProductCategories (props) {
    const {title, sub_title} = props.data
    return <Grid container className={classnames('section productsContainer')}>
        <Grid  xs={12} className={classnames('header text-center')}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="p">{sub_title}</Typography>
        </Grid>
        <Grid xs={12} item className={classnames('content')}>
            <Grid container className={classnames('products')} spacing={3} wrap="nowrap" style={{ overflowX: 'auto' }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Product key={item} />
                ))}
            </Grid>
        </Grid>
    </Grid>
}