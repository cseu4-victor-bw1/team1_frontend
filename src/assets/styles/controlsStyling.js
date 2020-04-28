import styled from 'styled-components'

export const Container = styled.div`
    grid-area: aside;
    padding: 0px 20px 20px 0px;
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
    width: 90%;
    margin: 0px auto;
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
    margin: 5px;
`;

export const Title = styled.div`
    position: relative;
    top: 60px;
    font-size: 2rem;
    font-weight: bold;
    width: 85%;
    text-align: center;
`;

export const Text = styled.div`
    position: relative;
    top: 90px;
    width: 65%;
    margin-left: 10%;
    padding: 15px 5px 5px 5px;
    height: 50%;
    overflow: scroll;
    color: white;
`