import styled from 'styled-components'

export const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  /* background-color: black; */
  overflow: scroll;
  background-image: radial-gradient(#636363, #18181b, #000000);
  z-index: -1;
`

export const MainContainer = styled.div`
    width: 1500px;
    height: 700px;
    margin: 0px auto;
    padding: 20px;
    display: grid;
    grid-template-rows: 60px auto auto 55px;
    grid-template-areas:
    " header header header header"
    "  main    main   main  aside"
    "  main    main   main  aside"
    " footer footer footer aside";
  /* overflow: hidden; */
  overflow: hidden;
  z-index: 2;
`

export const RoutersContainer = styled.div`
    grid-area: main;
    width: 900px;
    background: none;
    border: 10px inset rgb(205, 175, 106);
    margin: 40px 20px 20px 40px; 
    height: 80%;
    overflow: hidden;
    background: none;
    z-index: 2;
`;