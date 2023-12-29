import { Container } from "@mui/material";
import React, {lazy} from "react";

const Header = lazy(()=>import("@layouts/components/Header"))
const Footer = lazy(()=>import("@layouts/components/Footer"))

export default function Web (props) {
    return <Container maxWidth="lg">
        <Header />
        <main style={{minHeight: '40vh'}}>
            {props.element}
        </main>
        <Footer />
    </Container>
}