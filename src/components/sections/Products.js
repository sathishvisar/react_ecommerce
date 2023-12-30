import React from "react";
import classnames from "classnames";
import PropTypes from 'prop-types';
import { Grid } from "@mui/material";
import Pagination from "@components/common/Pagination"
import Product from "@components/products/Product"
import Typography from "@components/common/Typography"
import "./Products.scss"

// const prducts_info = {
//     'all': 'All product',
//     'new': 'New arrivals',
//     'trending': 'Trending products'
// }

function Products ({layout, title, sub_title}) {

    const handlePageChange = (page) => {

    };

    const totalItems = 20;
    
    return <Grid container className={classnames('section productsContainer', layout)}>
        <Grid xs={12} item className={classnames('header', layout === 'slick_layout' ? 'text-center' : '')}>
            <Typography variant="h2">{title}</Typography>
            {layout === 'slick_layout' || sub_title ? (
                <Typography variant="body1">{sub_title}</Typography>
            ) : null}
        </Grid>
        <Grid xs={12} item className={classnames('content')}>
            <Grid container 
                className={classnames('products')} 
                spacing={3} 
                wrap={layout === 'slick_layout' ? 'nowrap' : undefined}
                style={{ overflowX: 'auto' }}>
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}><Product key={item} /></Grid>
                ))}
            </Grid>
        </Grid>
        <Grid xs={12} item className={classnames('pagination')}>
            <Pagination
                totalItems={totalItems} 
                onPageChange={handlePageChange} />
        </Grid>
    </Grid>
}

Products.propTypes = {
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.string,
    layout: PropTypes.oneOf(['list_layout','slick_layout']).isRequired,
    type: PropTypes.oneOf(['all', 'trending', 'new']).isRequired,
}
Products.defaultProps = {
    title: '',
    sub_title: null,
    layout: 'list_layout',
    type: 'all'
}

export default Products