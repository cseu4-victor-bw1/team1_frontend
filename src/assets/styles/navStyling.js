import styled from 'styled-components'
import { NavLink } from "react-router-dom"
import { FONT } from "./variables"

export const Container = styled.div`
    grid-area: header;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const H1 = styled.h1`
    font-family: ${FONT.primary};
    color: white;
`;

export const NavLinks = styled(NavLink)`
        color: white;
        text-decoration: none;
        padding: 20px;
        font-weight: bold;

        &:hover{
            text-decoration: underline;
        }
`