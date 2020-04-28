import styled from "styled-components"
import { COLOR } from "./variables"

export const Container = styled.div`
    height: 80%;
    width: 60%;
    margin: 5% 20%;
    border: 5px inset ${COLOR.gold};
    background-color: ${COLOR.brown};

`;

export const Img = styled.img`
    width: 80%;
    max-width: 300px;
    margin-top: 6%;
`;

export const Title = styled.h1`
    width: 80%;
    letter-spacing: 3px;
    /* position: relative;
    bottom: 95px;
    margin-left: 9%; */
    background-image: url("../assets/images/buttonLong.png")
`;

export const Form = styled.form`
    width: 70%;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    position: relative;

`;

export const Input = styled.input`
    border: 5px inset ${COLOR.gold};
    width: 70%;
    margin: 10px auto;
    padding: 15px;

`;