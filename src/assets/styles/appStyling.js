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
`

export const RoutersContainer = styled.div`
    grid-area: main;
    border: 2px solid red;
`;