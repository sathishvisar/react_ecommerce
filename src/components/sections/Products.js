import React from "react";
import classnames from "classnames";
import { Grid } from "@mui/material";
import Product from "@components/shared/Product"
import "./Products.scss"


export default function ProductCategories (props) {
    const {title, sub_title} = props.data
    return <Grid container className={classnames('productsContainer')}>
        <Grid xs={12} item className={classnames('content')}>
            <h2>{title}</h2>
            <h3>{sub_title}</h3>
            <Grid container className={classnames('products')} spacing={3} wrap="nowrap" style={{ overflowX: 'auto' }}>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Product key={item} />
                ))}
            </Grid>
        </Grid>
    </Grid>
}