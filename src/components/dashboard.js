import React from "react";
import { Container, Canvas, Img } from "../assets/styles/dashboardStyling";
import RoomMatrix from "./game-elements/roomMatrix"
import Character from "./game-elements/character";

export default function Dashboard(props) {



    return (
        <Container>
            <Canvas>
                <RoomMatrix user={props.user} />
                {/* <Character user={props.user} /> */}
            </Canvas>
        </Container>
    )
}