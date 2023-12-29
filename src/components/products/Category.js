import React from "react";
import classnames from "classnames";
import BgImage from '@assets/images/category.png';
import Typography from '@components/common/Typography';

import "./Category.scss"

export default function Category (props) {
    const {name, image, count} = props.category || {}

    return <div className={classnames('category')}>
        <div className="image" style={{ backgroundImage: `url(${image || BgImage})` }}>

        </div>
        <div className="info">
            <Typography variant="h3">{name || 'Category'}</Typography>
            <span className="count">{count || 0}</span>
        </div>
    </div>
}