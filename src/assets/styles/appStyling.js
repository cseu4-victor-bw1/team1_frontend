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
  overflow: hidden;
`

export const RoutersContainer = styled.div`
    grid-area: main;
    width: 60vw;
    background: none;
    border: 10px inset rgb(205, 175, 106);
    margin: 20px 10px 20px 40px; 
    height: 80%;
    overflow: scroll;
`;