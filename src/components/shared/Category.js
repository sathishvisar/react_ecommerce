import React from "react";
import classnames from "classnames";
import BgImage from '@assets/images/category.png';
import "./Category.scss"

export default function Category (props) {
    const {name, image, count} = props.category || {}

    return <div className={classnames('category')}>
        <div className="image" style={{ backgroundImage: `url(${image || BgImage})` }}>

        </div>
        <div className="info">
            <h4>{name || 'Category'}</h4>
            <h6>{count || 0}</h6>
        </div>
    </div>
}