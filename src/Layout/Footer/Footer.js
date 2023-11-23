import React from 'react';
import styled from 'styled-components';


function Footer() {

    const Footer = styled.footer`
        background: black;
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:  #ffffff;
        *{
            margin: 0 10%;
        }
    `;

    const P = styled.p`
        background: black;
        color:  #ffffff;
    `;

    return (
        <Footer>
            <P>
                G for Gazetta 
            </P>
            <P>
                2023
            </P>
        </Footer>
    );
}

export default Footer;