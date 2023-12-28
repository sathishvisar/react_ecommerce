import React from "react";
import classnames from "classnames";
import BgImage from '@assets/images/category.png';
import "./Product.scss"

export default function Product (props) {
    const {name, image, rating, price} = props.product || {}

    return <div className={classnames('product')}>
        <div className="image" style={{ backgroundImage: `url(${image || BgImage})` }}>

        </div>
        <div className="info">
            <h4>{name || 'Name'}</h4>
            <h6>$ {price || 0}</h6>
        </div>
    </div>
}