import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Button = styled.button`
    border: none;
    border-radius: 5px;
    color: hsla(307, 100%, 55%, 0.667);
    background-color: #fde9eb;
    margin: 0 10%;
    font-weight: bold;
    text-transform: uppercase;

    &: hover {

        cursor: pointer;
    } 
` 

function Header() {

    const Header = styled.header`
        position: fixed;
        top: 0;
        width: 100%;
        height: 40px;
        background: rgba(0, 0, 0);
        color: #ffffff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
        z-index: 100;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    return (
        <Header>
            <Button>
                <Link to='/news'>
                    <img className="logo" height={55} src='newsImages/logo/logo.png' />
                </Link>
            </Button>

            <Link to='/register' className='reg-link'>
                <Button>Наша рассылка</Button>
            </Link>
        </Header>
    );

}

export default Header;