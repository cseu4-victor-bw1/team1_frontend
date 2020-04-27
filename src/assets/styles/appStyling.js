import styled from 'styled-components'

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: 60px auto auto 55px;
    grid-template-areas:
    " header header header header"
    "  main    main   main  aside"
    "  main    main   main  aside"
    " footer footer footer aside";
  overflow: hidden;
  background-image: radial-gradient(#636363, #18181b, #000000);
`

export const RoutersContainer = styled.div`
    grid-area: main;
    width: 60vw;
    background-image: url("https://github.com/cseu4-victor-bw1/team1_frontend/blob/home/src/assets/images/textBox.png?raw=true");
    background-size: cover;
    background-repeat: no-repeat;
`;