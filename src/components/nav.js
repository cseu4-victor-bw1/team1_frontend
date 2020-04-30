import React from "react"
import { Container, H1, NavLinks } from "../assets/styles/navStyling"

export default function Nav() {
    return (
        <Container>
            <H1>Maze of Terror</H1>
            <div>
                <NavLinks to="/login">LOGIN</NavLinks>
                <NavLinks to="/">REGISTER</NavLinks>
            </div>
        </Container>
    )
}