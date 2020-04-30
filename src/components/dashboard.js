import React, { useState, useEffect } from "react";
import { Container, Canvas, Img } from "../assets/styles/dashboardStyling";
import RoomMatrix from "./game-elements/roomMatrix"
import Character from "./game-elements/character";
import axios from "axios";

export default function Dashboard(props) {

    const [rooms, setRooms] = useState()

    const [array, setArray] = useState()

    // MARTIX initialise

    const columns = 5

    let matrix = [
        Array(columns).fill(0),
        Array(columns).fill(0),
        Array(columns).fill(0),
        Array(columns).fill(0),
        Array(columns).fill(0),
    ]

    // MARTIX placing rooms in coordinates

    const matrixMap = allRooms => {

        const rooms = allRooms.sort((a, b) => {
            return a.pk - b.pk;
        });

        const placement = (room, y, x) => {
            // x or y are not defined
            if (x === undefined) {
                x = Math.floor(columns / 2)
            }
            if (y === undefined) {
                y = Math.floor(columns / 2)
            }

            let isPresent;
            let count = 0


            // is it in the matrix ?

            while (count < matrix.length) {
                console.log(matrix[count].find((room => room.pk !== matrix[count].pk)))
                if (matrix[count].find((room => room.pk !== matrix[count].pk)) !== undefined) {
                    isPresent = true
                } else {
                    isPresent = false
                }
                count++
            }

            if (isPresent === false) {
                console.log(room)
                if (!room.x && !room.y) {
                    if (!matrix[y][x]) {
                        matrix[y][x] = room;
                        room.x = Math.floor(columns / 2)
                        room.y = Math.floor(columns / 2)
                    }
                } else if (!room.x) {
                    matrix[room.y][x] = room;
                    room.x = Math.floor(columns / 2)
                } else if (!room.y) {
                    matrix[y][room.x] = room;
                    room.y = Math.floor(columns / 2)
                }

            }

            const hasRooms = room => {
                if (room.fields.n_to > 0) {
                    y = y - 1
                    let npk = rooms.find(curr => curr.pk === room.fields.n_to)
                    npk.y = y
                    npk.x = x
                    matrix[y][x] = npk

                }
                if (room.fields.s_to > 0) {
                    y = y + 1
                    const npk = rooms.find(curr => curr.pk === room.fields.s_to)
                    npk.y = y
                    npk.x = x
                    matrix[y][x] = npk
                }
                if (room.fields.e_to > 0) {
                    x = x + 1
                    const npk = rooms.find(curr => curr.pk === room.fields.e_to)
                    npk.x = x
                    npk.y = y
                    matrix[y][x] = npk
                }
                if (room.fields.w_to > 0) {
                    x = x - 1
                    const npk = rooms.find(curr => curr.pk === room.fields.w_to)
                    npk.x = x
                    npk.y = y
                    matrix[y][x] = npk
                }
            }
            hasRooms(room)
            return

        }
        console.log("this is the matrix", matrix)
        const arr = rooms.forEach(room => placement(room, room.y, room.x))

        return arr

    }

    // MARTIX decalre render type


    const mapRooms = e => {

        let arr = [];

        for (let i = 0; i < matrix.length; i++) {
            matrix[i].map((room, index) => {
                if (room === 0) {
                    arr.push(0)
                } else {
                    arr.push(room.pk)
                }
            })
        }

        setArray(arr)
    }

    useEffect(() => {
        axios.get("https://lambda-mud-test.herokuapp.com/api/adv/rooms")
            .then(data => {
                const rooms = JSON.parse(data.data.rooms)
                setRooms(rooms)
                matrixMap(rooms)
                mapRooms()
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    if (!rooms) {
        return (
            <div></div>
        )
    }


    return (
        <Container>
            <Canvas>
                <RoomMatrix roomData={array} rooms={rooms} />
                {/* <Character user={props.user} /> */}
            </Canvas>
        </Container>
    )
}