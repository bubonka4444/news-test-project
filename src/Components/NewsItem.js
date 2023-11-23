import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
    width: 100%;
    margin: 10%;
    border-bottom: 1px solid rgb(50, 32, 32);
    position: relative;
    text-decoration: none; 
    overflow: hidden;
    display: grid;
    gap: 10px;
    
`
const Img = styled.img`
    width: 40%;
    height: auto;
    float: left;
    @media (max-width: 600px) {
        float: top;
        width: 90%;
        height: auto;
    }
    
`
const H3 = styled.h3`
    margin-left: 40%;
    padding: 5px 10px;
    text-decoration: none;
    @media (max-width: 600px) {
        margin: 0;
    }  
`

function NewsItem({ id, title, img }) {
    return (
        <Li key={id}>
            <Link to={`/news/${id}`}>
                <Img src={img} alt={title} loading="lazy" />
                <H3>{title}</H3>
            </Link>
        </Li>
    );
}

export default NewsItem;