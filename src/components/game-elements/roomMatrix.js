import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "./room";
import styled from "styled-components"

export default function Dashboard(props) {

    // GET THE ROOMS

    const [rooms, setRooms] = useState([null])

    let start;

    // MARTIX MAP

    const columns = 5

    const matrix = [
        Array(columns).fill(null),
        Array(columns).fill(null),
        Array(columns).fill(null),
        Array(columns).fill(null),
        Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null),
        // Array(columns).fill(null)
    ]

    const matrixMap = room => {

    }

    useEffect(() => {
        axios.get("https://lambda-mud-test.herokuapp.com/api/adv/rooms")
            .then(data => {
                const rooms = JSON.parse(data.data.rooms)
                setRooms(rooms)
            })
            .catch(err => {
                console.log(err)
            })
        if (props.user == null) { start = rooms[0] } else { start = rooms.filter(curr => curr.fields.title === props.user.title) }
    }, [])

    return (
        <Canvas>
            {
                rooms.length > 1 ?
                    rooms.map((room, index) => {
                        return (
                            <Room
                                n_to={room.fields.n_to}
                                s_to={room.fields.s_to}
                                e_to={room.fields.e_to}
                                w_to={room.fields.w_to}
                                crt={room.fields.title}
                                title={room.fields.title}
                                key={index}
                            />
                        )
                    })
                    : <div></div>
            }
        </Canvas>
    )
}


const Canvas = styled.div`
    overflow: scroll;
`;