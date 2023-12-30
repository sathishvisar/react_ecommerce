import React from "react";
import Products from "@components/sections/Products";
import EmailSubscribe from "@components/sections/EmailSubscribe";

export default function Shop () {
    return <>
        <Products 
            title='All product'
            layout='list_layout'
            type='trending' />

        <Products 
            title='New arrivals'
            layout='list_layout'
            type='new' />
        
        <EmailSubscribe
            title='Keep in touch'
            sub_title='Lorem ipsum dolor sit amet consectetur' />
    </>
}