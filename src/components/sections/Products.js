import React, {useEffect, useState } from "react";
import classnames from "classnames";
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Grid } from "@mui/material";
import Pagination from "@components/common/Pagination"
import Product from "@components/products/Product"
import Typography from "@components/common/Typography"
import { FetchProducts } from '@store/products/action';

import "./Products.scss"
function Products (props) {
    const {  layout, type, title, sub_title, fetchProducts, products, productsError, productsLoading, productsTotal } = props;
    
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const handlePageChange = (page) => {};

    useEffect(() => {
        let query = {
            type,
            page,
            limit
        }
        fetchProducts(query)
    }, [fetchProducts])
    
    return <Grid container className={classnames('section productsContainer', layout)}>
        <Grid xs={12} item className={classnames('header', layout === 'slick_layout' ? 'text-center' : '')}>
            <Typography variant="h2">{title}</Typography>
            {layout === 'slick_layout' || sub_title ? (
                <Typography variant="p">{sub_title}</Typography>
            ) : null}
        </Grid>
        <Grid xs={12} item className={classnames('content')}>
            <Grid container 
                className={classnames('products')} 
                spacing={3} 
                wrap={layout === 'slick_layout' ? 'nowrap' : undefined}
                style={{ overflowX: 'auto' }}>
                {products && products.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={item} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
        { products?.length > limit && <Grid xs={12} item className={classnames('pagination')}>
            <Pagination
                totalItems={productsTotal} 
                onPageChange={handlePageChange} />
        </Grid> }
    </Grid>
}

const mapStateToProps = (state) => {
    return { ...state.products }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: (params) => dispatch(FetchProducts(params))
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Products)