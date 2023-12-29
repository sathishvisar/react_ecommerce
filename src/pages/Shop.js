import React from "react";
import EmailSubscribe from "@components/sections/EmailSubscribe";

import data from './data.json';

export default function Shop () {
    return <>
            <EmailSubscribe data={data['email_subscribe']} />
    </>
}