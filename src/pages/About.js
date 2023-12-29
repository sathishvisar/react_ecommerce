import React from "react";
import EmailSubscribe from "@components/sections/EmailSubscribe";
import BannerFullwidth from "@components/sections/BannerFullwidth";
import TwoColRightImage from "@components/sections/TwoColRightImage";
import data from './data.json';

export default function About () {
    return <>
        <BannerFullwidth data={data['about_banner']} />

        <TwoColRightImage data={data['about_two_col']} />

        <EmailSubscribe data={data['email_subscribe']} />
    </>
}