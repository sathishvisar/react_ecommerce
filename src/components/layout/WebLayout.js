import { Container } from "@mui/material";
import React, {lazy} from "react";

const Header = lazy(()=>import("@components/layout/components/Header"))
const Footer = lazy(()=>import("@components/layout/components/Footer"))

export default function Web (props) {
    return <Container maxWidth="lg">
        <Header />
        {props.element}
        <Footer />
    </Container>
}