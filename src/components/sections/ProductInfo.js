import React from "react"
import { Box, Grid } from "@mui/material"
import classnames from "classnames";
import Typography from '@components/common/Typography'
import Rating from '@mui/material/Rating';
import BgImage from '@assets/images/category.png';
import IconAddToCart from '@components/icons/IconAddToCart';
import "./ProductInfo.scss"

function ProductInfo () {
    const rating = 3.5
    return <>
        <Grid container className={classnames('section productInfoContainer')}>
            <Grid item xs={12} md={6} className={classnames('productImages')}>
                <div className="slider">
                    <div className="activeSlider">
                        <img src={BgImage} alt="" />
                    </div>
                    <Box className="items" sx={{ 
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <img src={BgImage} alt="" />
                        <img src={BgImage} alt="" />
                        <img src={BgImage} alt="" />   
                    </Box>
                </div>
            </Grid>
            <Grid item xs={12} md={6} className="productInfo">
                <Box>
                    <Typography variant="h2">Product details</Typography>
                    <Typography variant="p">
                        Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.Lorem ipsum dolor sit amet consectetur. Eu nulla elementum vulputate quam. Amet bibendum pellentesque molestie morbi nibh aliquam consectetur elit. Morbi in rutrum eu lectus sit a ipsum risus ultrices.
                    </Typography>
                </Box>
                <Box className="reviews" sx={{ 
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                    <Rating
                        className="productRating"
                        name="simple-controlled"
                        value={rating || 0}
                        size="small"
                    />
                    <span>32 reviews</span>
                    <span>154 sold</span>
                </Box>
                <Box className="quantity-cart" sx={{ 
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Box className="qty-changer" sx={{display: 'flex'}}>
                        <span className={classnames('qty-button decrease')}></span>
                        <span className={classnames('qty-button count')}></span>
                        <span className={classnames('qty-button increase')}></span>
                    </Box>
                    <Box>
                    <span className="addTocart"><IconAddToCart /></span>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
}

export default ProductInfo