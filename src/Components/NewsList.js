import React, { useEffect, Suspense, lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Navigation from './Navigation';

const NewsItem = lazy(() => import('./NewsItem'))


const Ul = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-right: 1px solid #cbabae;
    border-left: 1px solid #cbabae;
    margin: 2% 10%;
    gap: 1%;
    
`

const NewsList = () => {
  
  const news = useSelector(state => state.news.filteredNews);
  const loading = useSelector(state => state.news.loading);

  

  console.log(news)
  return (
    <div className=''>
        <Navigation/>

        {loading ? (
        <p>Думоем...</p>
        ) : (
        <>
            <Ul>
                {news.map(item => (
                    <Suspense fallback={<h2>Многоумоем...</h2>}>
                        <NewsItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        img={item.img}
                    />
                    </Suspense> 
                ))}
            </Ul>
        </>
    )}
    </div>
  );
};

export default NewsList;