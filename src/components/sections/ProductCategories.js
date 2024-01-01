import React, {useEffect, useState } from "react";
import classnames from "classnames";
import { connect } from 'react-redux'
import { Grid } from "@mui/material";
import Category from "@components/products/Category"
import Typography from "@components/common/Typography"
import { FetchCategories } from '@store/products/action';
import "./ProductCategories.scss"


function ProductCategories (props) {
    const {title, sub_title} = props.data
    const { fetchCategories, categories, categoriesError, categoriesLoading, categoriesTotal } = props;


    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const handlePageChange = (page) => {};

    useEffect(() => {
        let query = {
            page,
            limit
        }
        fetchCategories(query)
    }, [fetchCategories])

    return <Grid container className={classnames('section productCategories')}>
        <Grid xs={12} item className={classnames('header text-center')}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="p">{sub_title}</Typography>
        </Grid>
        <Grid xs={12} item className={classnames('content text-center')}>
            <Grid container className={classnames('categories')} spacing={3} wrap="wrap">
                {categories && categories.map((item, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
                        <Category category={item}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </Grid>
}

const mapStateToProps = (state) => {
    return { ...state.products }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: (params) => dispatch(FetchCategories(params))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCategories)