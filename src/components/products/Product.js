import React from "react";
import classnames from "classnames";
import Rating from '@mui/material/Rating';
import IconAddToCart from '@components/icons/IconAddToCart';
import Typography from "@components/common/Typography"
import slugify from "@utils/slugify"
import BgImage from '@assets/images/category.png';
import { Link } from "react-router-dom";

import "./Product.scss"

export default function Product (props) {
    const {id, name, image, rating, price} = props.product || {}

    return <div className={classnames('product')}>
        <div className="image" style={{ backgroundImage: `url(${image || BgImage})` }}>

        </div>
        <div className="info">
            <Link to={`/product/${id}/${slugify(name)}`}>
                <Typography variant="h4">{name || 'Name'}</Typography>
            </Link>
            <div className={classnames('d-flex flex-align-center flex-justify-between')}>
                <Rating
                    className="productRating"
                    name="simple-controlled"
                    value={rating || 0}
                    size="small"
                />
                <span className="addTocart"><IconAddToCart /></span>
            </div>
            <span className="price">$ {price || 0}</span>
        </div>
    </div>
}