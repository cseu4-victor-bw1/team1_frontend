import React from "react";
import { Container, ArrowImg, ArrowContainer, TextBox, Title, Text, Button } from "../assets/styles/controlsStyling"
import arrowUp from "../assets/images/arrowUp.png";
import arrowDown from "../assets/images/arrowDown.png";
import arrowRight from "../assets/images/arrowRight.png";
import arrowLeft from "../assets/images/arrowLeft.png"

export default function Controls(props) {

    const keyCodes = e => {
        e = e || window.event;
        console.log(e)
        if (e.keyCode === 65 || e.keyCode === 37) {
            // left
            console.log('HElLO')
        } else if (e.keyCode === 87 || e.keyCode === 38) {
            // up
            console.log(e)
        } else if (e.keyCode === 83 || e.keyCode === 40) {
            // down
            console.log(e)
        } else if (e.keyCode === 68 || e.keyCode === 39) {
            // right
            console.log(e)
        }
    }

    document.onkeydown = keyCodes

    const handleClick = e => {
        props.axiosWithAuth("POST", "https://cswk1-mud-game.herokuapp.com/api/adv/move/", { "direction": e.target.value })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <Container>
            <TextBox>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </TextBox>
            <ArrowContainer>
                <Button onClick={handleClick} value={"w"}>
                    <ArrowImg src={arrowLeft} alt="Move left" value={"w"} />
                </Button>
                <Button onClick={handleClick} value={"n"}>
                    <ArrowImg src={arrowUp} alt="Move up" value="n" />
                </Button>
                <Button onClick={handleClick} value={"e"}>
                    <ArrowImg src={arrowRight} alt="Move right" value="e" />
                </Button>
                <Button onClick={handleClick} value={"s"}>
                    <ArrowImg src={arrowDown} alt="Move down" value="s" />
                </Button>
            </ArrowContainer>
        </Container>
    )
}
