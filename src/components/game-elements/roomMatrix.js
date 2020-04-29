import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Room from "./room";
import styled from "styled-components"

export default function Dashboard(props) {

    const [rooms, setRooms] = useState()

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

        const placement = (room, y = Math.floor(columns / 2), x = Math.floor(columns / 2)) => {
            // x or y are not defined
            if (x === undefined || room.x === undefined) {
                x = Math.floor(columns / 2)
            }
            if (y === undefined || room.y === undefined) {
                y = Math.floor(columns / 2)
            }
            // is it in the matrix?

            for (let j = 0; j < matrix.length; j++) {
                if (!matrix[j].includes(room)) {
                    if (!matrix[y][x]) {
                        matrix[y][x] = room;
                    }
                }
            }
            const hasRooms = room => {
                if (room.fields.n_to > 0) {
                    y = y - 1
                    let npk = rooms.filter(curr => curr.pk === room.fields.n_to)
                    npk.y = y
                    npk.x = x
                    matrix[y][x] = npk[0]
                    // placement(npk[0], npk.y, npk.x)
                }
                if (room.fields.s_to > 0) {
                    y = y + 1
                    const npk = rooms.filter(curr => curr.pk === room.fields.s_to)
                    npk.y = y
                    npk.x = x
                    matrix[y][x] = npk[0]
                    // placement(npk[0], npk.y, npk.x)
                }
                if (room.fields.e_to > 0) {
                    x = x + 1
                    const npk = rooms.filter(curr => curr.pk === room.fields.e_to)
                    npk.x = x
                    npk.y = y
                    matrix[y][x] = npk[0]
                    // placement(npk[0], npk.y, npk.x)
                }
                if (room.fields.w_to > 0) {
                    x = x - 1
                    const npk = rooms.filter(curr => curr.pk === room.fields.w_to)
                    npk.x = x
                    npk.y = y
                    matrix[y][x] = npk[0]
                    // placement(npk[0], npk.y, npk.x)
                }
            }
            hasRooms(room)
            return

        }
        console.log("this is the matrix", matrix)
        const arr = rooms.forEach(room => placement(room))

        return arr

    }

    // MARTIX decalre render type

    // const [array, setArray] = useState([])

    // const mapRooms = e => {

    //     let arr = [];

    //     for (let i = 0; i < matrix.length; i++) {
    //         matrix[i].map((room, index) => {
    //             if (room === 0) {
    //                 arr.push(<p>no room</p>)
    //             } else {
    //                 arr.push(< Room
    //                     n_to={room.fields.n_to}
    //                     s_to={room.fields.s_to}
    //                     e_to={room.fields.e_to}
    //                     w_to={room.fields.w_to}
    //                     crt={room.fields.title}
    //                     title={room.fields.title}
    //                     key={index}
    //                 />)
    //             }
    //         })
    //     }
    //     return arr
    // }

    useEffect(() => {
        axios.get("https://lambda-mud-test.herokuapp.com/api/adv/rooms")
            .then(data => {
                const rooms = JSON.parse(data.data.rooms)
                setRooms(rooms)
                matrixMap(rooms)
                // mapRooms()
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
        <Canvas>
            {
                matrix[0].forEach((room) => {
                    console.log("this is the room", room)

                    if (!room === 0) {
                        return (
                            < Room
                                // n_to={room.fields.n_to}
                                // s_to={room.fields.s_to}
                                // e_to={room.fields.e_to}
                                // w_to={room.fields.w_to}
                                // crt={room.fields.title}
                                // title={room.fields.title}
                                key={room}
                            />)
                    } else {
                        return (<p>no room</p>)
                    }
                })
            }
            {
                matrix[1].map((room, index) => {
                    console.log("This is the martrix", matrix[1])
                    if (room === 0) {
                        return (<p>no room</p>)
                    } else {
                        return (
                            < Room
                                n_to={room.fields.n_to}
                                s_to={room.fields.s_to}
                                e_to={room.fields.e_to}
                                w_to={room.fields.w_to}
                                crt={room.fields.title}
                                title={room.fields.title}
                                key={index}
                            />)
                    }
                })
            }
        </Canvas>
    )
}


const Canvas = styled.div`
                overflow: scroll;
`;