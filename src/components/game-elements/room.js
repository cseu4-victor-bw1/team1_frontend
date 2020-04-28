import React from "react";
import styled from "styled-components";
import WallLeft from "../../assets/images/wallLeft1.png"
import WallNorth from "../../assets/images/wallNorth1.png"
import WallSouth from "../../assets/images/wallSouth1.png"
import WallRight from "../../assets/images/wallRight1.png"
import GateSide from "../../assets/images/gateSide.png"
import GateFront from "../../assets/images/gateFront.png"
import FloorTile1 from "../../assets/images/floorTile1.png"
import FloorTile2 from "../../assets/images/floorTile2.png"
import FloorTile3 from "../../assets/images/floorTile3.png"
import FloorTile4 from "../../assets/images/floorTile4.png"

export default function Room(props) {
    let north = {
        a: WallNorth,
        b: WallNorth
    }
    let south = {
        a: WallSouth,
        b: WallSouth
    }
    let east = {
        a: WallRight,
        b: WallRight
    }
    let west = {
        a: WallLeft,
        b: WallLeft
    }

    if (props.n_to > 0) {
        north = {
            a: FloorTile1,
            b: FloorTile2
        }
    }
    if (props.s_to > 0) {
        south = {
            a: FloorTile1,
            b: FloorTile2
        }
    }
    if (props.e_to > 0) {
        east = {
            a: FloorTile1,
            b: FloorTile2
        }
    }
    if (props.w_to > 0) {
        west = {
            a: FloorTile1,
            b: FloorTile2
        }
    }



    return (
        <RoomGrid>
            {/* Row1 */}
            <TL src={WallLeft} />
            <N1 src={WallNorth} />
            <N2 src={north.a} />
            <N3 src={north.b} />
            <N4 src={WallNorth} />
            <TR src={WallRight} />
            {/* Row2 */}
            <BL src={WallLeft} />
            <F1 src={FloorTile1} />
            <F2 src={FloorTile2} />
            <F3 src={FloorTile3} />
            <F4 src={FloorTile4} />
            <BR src={WallRight} />
            {/* Row3 */}
            <W1 src={west.a} />
            <F5 src={FloorTile1} />
            <F6 src={FloorTile2} />
            <F7 src={FloorTile3} />
            <F8 src={FloorTile4} />
            <E1 src={east.a} />
            {/* Row4 */}
            <W2 src={west.b} />
            <F9 src={FloorTile1} />
            <F10 src={FloorTile2} />
            <F11 src={FloorTile3} />
            <F12 src={FloorTile4} />
            <E2 src={east.b} />
            {/* Row5 */}
            <W3 src={WallLeft} />
            <F13 src={FloorTile1} />
            <F14 src={FloorTile2} />
            <F15 src={FloorTile3} />
            <F16 src={FloorTile4} />
            <E3 src={WallRight} />
            {/* Row6 */}
            <W4 src={WallLeft} />
            <S1 src={WallSouth} />
            <S2 src={south.a} />
            <S3 src={south.b} />
            <S4 src={WallSouth} />
            <E4 src={WallRight} />
        </RoomGrid>
    )
}

const RoomGrid = styled.div`
    display: grid;
    grid-auto-columns: 30px 30px 30px 30px 30px 30px;
    grid-auto-rows: 30px 30px 30px 30px 30px 30px;
    grid-template-areas:
    "  1  2  3  4  5  6  "
    "  7  8  9  10 11 12 "
    "  13 14 15 16 17 18 "
    "  19 20 21 22 23 24 "
    "  25 26 27 38 29 30 "
    "  31 32 33 34 35 36";

    img {
        height: 30px;
        width: 30px;
    }
`;

const N1 = styled.img`
    grid-area: "2";
`
const N2 = styled.img`
    grid-area: "3";
`
const N3 = styled.img`
    grid-area: "4";
`
const N4 = styled.img`
    grid-area: "5";
`
const E1 = styled.img`
    grid-area: "12";
`
const E2 = styled.img`
    grid-area: "18";
`
const E3 = styled.img`
    grid-area: "24";
`
const E4 = styled.img`
    grid-area: "30";
`
const S1 = styled.img`
    grid-area: "32";
`
const S2 = styled.img`
    grid-area: "33";
`
const S3 = styled.img`
    grid-area: "34";
`
const S4 = styled.img`
    grid-area: "35";
`
const W1 = styled.img`
    grid-area: "7";
`
const W2 = styled.img`
    grid-area: "13";
`
const W3 = styled.img`
    grid-area: "19";
`
const W4 = styled.img`
    grid-area: "25";
`

const F1 = styled.img`
    grid-area: "8";
`
const F2 = styled.img`
    grid-area: "9"; 
`
const F3 = styled.img`
    grid-area: "10";
`
const F4 = styled.img`
    grid-area: "11";
`
const F5 = styled.img`
    grid-area: "14";
`
const F6 = styled.img`
    grid-area: "15"; 
`
const F7 = styled.img`
    grid-area: "16";
`
const F8 = styled.img`
    grid-area: "17";
`
const F9 = styled.img`
    grid-area: "20";
`
const F10 = styled.img`
    grid-area: "21"; 
`
const F11 = styled.img`
    grid-area: "22";
`
const F12 = styled.img`
    grid-area: "23";
`
const F13 = styled.img`
    grid-area: "26";
`
const F14 = styled.img`
    grid-area: "27"; 
`
const F15 = styled.img`
    grid-area: "28";
`
const F16 = styled.img`
    grid-area: "29";
`



const TL = styled.img`
    grid-area: "1";
`
const TR = styled.img`
    grid-area: "6"; 
`
const BL = styled.img`
    grid-area: "31";
`
const BR = styled.img`
    grid-area: "36";
`


const RoomXX = styled.div`
  width: 9.2%;
  height: 100%;
  margin:0;
  padding:0;
  text-align: center;
  font-family: cursive;
  background-color: ${props => (props.crt === props.title ? 'green' : 'wheat')};
  color: ${props => (props.crt === props.title ? 'white' : 'black')};
  border-top: ${props => (props.n_to > 0 ? '4px solid wheat' : '4px solid grey')};
  border-bottom: ${props => (props.s_to > 0 ? '4px solid wheat' : '4px solid grey')};
  border-right: ${props => (props.e_to > 0 ? '4px solid wheat' : '4px solid grey')};
  border-left: ${props => (props.w_to > 0 ? '4px solid wheat' : '4px solid grey')};
`;