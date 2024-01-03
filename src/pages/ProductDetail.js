import React from "react";
import EmailSubscribe from "@components/sections/EmailSubscribe";
import ProductInfo from "@components/sections/ProductInfo";

function ProductDetail () {
    return <>
        <ProductInfo />
        
        <EmailSubscribe
            title='Keep in touch'
            sub_title='Lorem ipsum dolor sit amet consectetur' />
    </>
}

export default ProductDetail