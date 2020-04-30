import React from "react"
import Person from "../../assets/images/character.png"
import styled from "styled-components"

export default function Character() {
    return (
        <div><Img src={Person} /></div>
    )
}

const Img = styled.img`
    height: 50px;
    width: 50px;
    position: relative;
    top: 200px;
`