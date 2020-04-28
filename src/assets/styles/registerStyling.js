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

export const TitleBox = styled.div`
    background-image: url("https://github.com/cseu4-victor-bw1/team1_frontend/blob/home/src/assets/images/buttonLong.png?raw=true");
    background-size: contain;
    background-repeat: no-repeat;
    width: 50%;
    height: 20%;
    padding: 2%;
    text-align: center;
    margin: 0 auto;
`;

export const Title = styled.h1`
    letter-spacing: 3px;
`;

export const Form = styled.form`
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
    /* top: 50px;
    position: relative; */
`;

export const Input = styled.input`
    border: 5px inset ${COLOR.gold};
    width: 70%;
    margin: 10px auto;
    padding: 15px;
`;

export const Submit = styled.input`
    border: 5px inset ${COLOR.gold};
    background-color: ${COLOR.gold};
    width: 70%;
    margin: 10px auto;
    padding: 5px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 2px;
`;
