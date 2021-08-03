import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    position: fixed;
    width: 100%;
    background-color: #242424;
    z-index: 11111;
`
export const LogoLink = styled(Link)`
    text-decoration: none;
    z-index: 111;
`

export const H1 = styled.h1`
    font-size: 42px;
    color: #fff;
    margin: 10px;
    @media (max-width: 960px){
        font-size: 32px;
        z-index: 111;
        margin: 15px;
    }
`

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 800px;
    @media (max-width: 1700px){
        margin-left: 600px;
    }
    @media (max-width: 1500px){
        margin-left: 400px;
    }
    @media (max-width: 1400px){
        margin-left: 300px;
    }
    @media (max-width: 1300px){
        margin-left: 100px;
    }
    @media (max-width: 960px){
        flex-direction: column;
        position: fixed;
        top: ${ ({ isOpen }) => isOpen ? '0' : '-100%' };
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: #242424;
        opacity: ${ ({ isOpen }) => isOpen ? '1' : '0' };
        transition: all 0.5s ease;
    }
`

export const Li = styled.li`
    margin: 0 30px;
    padding: 20px 10px;
    @media (max-width: 960px){
        margin: 20px 0;
        padding: 30px;
        width: 100%;
        text-align: center;
        &:hover{
            background-color: #fff;
            cursor: pointer;
        }
    }
`

export const LiLinks = styled(Link)`
    text-decoration: none;
    font-size: 26px;
    color: #fff;
    @media (max-width: 960px){
        &:hover{
            display: block;
            width: 100%;
            color: #242424;
        }
    }
`