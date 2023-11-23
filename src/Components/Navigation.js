import { fetchNews, filterNews } from '../redux/newsActions';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from './Search';
import styled from 'styled-components';
import { RxHamburgerMenu } from "react-icons/rx";

const Button = styled.button`
    border: none;
    border-radius: 5px;
    color: rgb(50, 32, 32);
    margin: 0 5%;
    font-weight: bold;
    text-transform: uppercase;

    &: hover {
        color: hsl(39, 100%, 55%);
        cursor: pointer;
    } 

` 

function Navigation() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    const handleFilter = theme => {
        dispatch(filterNews(theme));
    };


    const [isScreenSmall, setIsScreenSmall] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        if (mediaQuery?.addEventListener) {
            mediaQuery.addEventListener('change', handleMediaQueryChange);
        } else {
            mediaQuery.addListener(handleMediaQueryChange);
        }
        handleMediaQueryChange(mediaQuery);

        return () => {
            if (mediaQuery?.removeEventListener) {
                mediaQuery.removeEventListener('change', handleMediaQueryChange);
            } else {
                mediaQuery.removeListener(handleMediaQueryChange);
            }
        };
    }, []);

    const handleMediaQueryChange = (mediaQuery) => {
        if (mediaQuery.matches) {
            setIsScreenSmall(true);
        } else {
            setIsScreenSmall(false);
        }
    };

    const [menuStatus, setMenuStatus] = useState(false);

    const toggleMenu = () => {
        setMenuStatus(!menuStatus);
    };

    return (
        <>
            {isScreenSmall &&
                <>
                    <button className='burger' onClick={toggleMenu}><RxHamburgerMenu /></button>

                    {menuStatus &&

                        <ul className='burger-container'>
                            <li><Button onClick={() => handleFilter('auto')}>автоспорт</Button></li>
                            <li><Button onClick={() => handleFilter('football')}>футбол</Button></li>
                            <li><Button onClick={() => handleFilter('basketball')}>баскетбол</Button></li>
                            <li><Search /></li>
                        </ul>}
                </>}
            {!isScreenSmall &&
                <div className='container'>
                    <nav className='nav-container'>
                        <Button onClick={() => handleFilter('auto')}>автоспорт</Button>
                        <Button onClick={() => handleFilter('football')}>футбол</Button>
                        <Button onClick={() => handleFilter('basketball')}>баскетбол</Button>
                    </nav>
                    <Search />
                </div>}
        </>
    );
}

export default Navigation;