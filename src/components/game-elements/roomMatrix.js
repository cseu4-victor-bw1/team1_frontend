import React from "react";
import Room from "./room";
import BlankSquare from "./blankSquare";
import styled from "styled-components"

export default function RoomMatrix(props) {


    return (
        <Canvas id="map">
            {
                !props.roomData ? <div></div> :
                    props.roomData.map((room, index) => {

                        if (room === 0) {
                            return (< BlankSquare key={index} />)
                        } else {
                            const thisRoom = props.rooms.filter(curr => curr.pk === room)
                            return (
                                < Room
                                    n_to={thisRoom[0].fields.n_to}
                                    s_to={thisRoom[0].fields.s_to}
                                    e_to={thisRoom[0].fields.e_to}
                                    w_to={thisRoom[0].fields.w_to}
                                    crt={thisRoom[0].fields.title}
                                    title={thisRoom[0].fields.title}
                                    key={index}
                                />)
                        }
                    })
            }
        </Canvas>
    )
}


const Canvas = styled.div`
    overflow: hidden;
    width: 900px;
    height: 900px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: -1
`;