import React from "react";
import styled from "styled-components";
import BlankSquare from "../../assets/images/blankSquare.png"

export default function Room(props) {

    return (
        <RoomGrid>
            {/* Row1 */}
            <TL src={BlankSquare} />
            <N1 src={BlankSquare} />
            <N2 src={BlankSquare} />
            <N3 src={BlankSquare} />
            <N4 src={BlankSquare} />
            <TR src={BlankSquare} />
            {/* Row2 */}
            <BL src={BlankSquare} />
            <F1 src={BlankSquare} />
            <F2 src={BlankSquare} />
            <F3 src={BlankSquare} />
            <F4 src={BlankSquare} />
            <BR src={BlankSquare} />
            {/* Row3 */}
            <W1 src={BlankSquare} />
            <F5 src={BlankSquare} />
            <F6 src={BlankSquare} />
            <F7 src={BlankSquare} />
            <F8 src={BlankSquare} />
            <E1 src={BlankSquare} />
            {/* Row4 */}
            <W2 src={BlankSquare} />
            <F9 src={BlankSquare} />
            <F10 src={BlankSquare} />
            <F11 src={BlankSquare} />
            <F12 src={BlankSquare} />
            <E2 src={BlankSquare} />
            {/* Row5 */}
            <W3 src={BlankSquare} />
            <F13 src={BlankSquare} />
            <F14 src={BlankSquare} />
            <F15 src={BlankSquare} />
            <F16 src={BlankSquare} />
            <E3 src={BlankSquare} />
            {/* Row6 */}
            <W4 src={BlankSquare} />
            <S1 src={BlankSquare} />
            <S2 src={BlankSquare} />
            <S3 src={BlankSquare} />
            <S4 src={BlankSquare} />
            <E4 src={BlankSquare} />
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
