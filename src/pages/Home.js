import React from "react";
import HomeSlider from "@components/sections/HomeSlider";
import ContentOneColWithBg from "@components/sections/ContentOneColWithBg";
import EmailSubscribe from "@components/sections/EmailSubscribe";
import ProductCategories from "@components/sections/ProductCategories";
import Products from "@components/sections/Products";

import data from './Home.json';

export default function Home () {
    return <>
            <HomeSlider data={data['main_section']} />

            <ContentOneColWithBg data={data['about_section']} />

            <ProductCategories data={data['product_categories']} />

            <Products data={data['products']} />

            <EmailSubscribe data={data['email_subscribe']} />
    </>
}