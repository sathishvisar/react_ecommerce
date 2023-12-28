import React from "react";
import classnames from "classnames";
import Rating from '@mui/material/Rating';
import IconAddToCart from '@components/icons/IconAddToCart';
import BgImage from '@assets/images/category.png';
import "./Product.scss"

export default function Product (props) {
    const {name, image, rating, price} = props.product || {}

    return <div className={classnames('product')}>
        <div className="image" style={{ backgroundImage: `url(${image || BgImage})` }}>

        </div>
        <div className="info">
            <h4>{name || 'Name'}</h4>
            <div className={classnames('d-flex flex-align-center flex-justify-between')}>
                <Rating
                    className="productRating"
                    name="simple-controlled"
                    value={rating || 0}
                    size="small"
                />
                <span className="addTocart"><IconAddToCart /></span>
            </div>
            
            <h6>$ {price || 0}</h6>
        </div>
    </div>
}