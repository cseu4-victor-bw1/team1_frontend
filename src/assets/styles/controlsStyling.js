import styled from 'styled-components'

export const Container = styled.div`
    grid-area: aside;
    padding: 0px 20px 20px 0px;
    width: 80%;
    margin: 0px auto;
`;

export const TextBox = styled.div`
    background-image: url("https://github.com/cseu4-victor-bw1/team1_frontend/blob/home/src/assets/images/textBoxBackground.png?raw=true");
    background-size: contain;
    background-repeat: no-repeat;
    height: 60%;
    margin-bottom: 20px;
`;

export const ArrowContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: 0px auto;
    padding-right: 50px;
    justify-content: space-evenly;
`;

export const TextImg = styled.img`
    width: 80%;
    height: 60%;
    margin-bottom: 50px;
`;

export const ArrowImg = styled.img`
    width: 80px;
    height: 80px;
`;

export const Title = styled.div`
    position: relative;
    top: 60px;
    font-size: 1.5rem;
    font-weight: bold;
    width: 85%;
    text-align: center;
`;

export const Text = styled.div`
    position: relative;
    top: 90px;
    width: 60%;
    margin-left: 10%;
    padding: 15px 5px 5px 10px;
    height: 50%;
    overflow: scroll;
    color: white;
`

export const Button = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    margin: 2%;
`;