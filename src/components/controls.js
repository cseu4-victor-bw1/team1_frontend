import React from "react";
import { Container, ArrowImg, TextImg, ArrowContainer } from "../assets/styles/controlsStyling"
import arrowUp from "../assets/images/arrowUp.png";
import arrowDown from "../assets/images/arrowDown.png";
import arrowRight from "../assets/images/arrowRight.png";
import arrowLeft from "../assets/images/arrowLeft.png"
import textBox from "../assets/images/textBoxBackground.png"

export default function Controls() {
    return (
        <Container>
            <TextImg src={textBox} alt="text" />
            <ArrowContainer>
                <ArrowImg src={arrowLeft} alt="Move left" />
                <ArrowImg src={arrowUp} alt="Move up" />
                <ArrowImg src={arrowDown} alt="Move down" />
                <ArrowImg src={arrowRight} alt="Move right" />
            </ArrowContainer>
        </Container>
    )
}
