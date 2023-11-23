import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNews, filterNews } from '../redux/newsActions';
import styled from 'styled-components';


const Article = styled.article`
    margin: 0 10%;
    margin-top: 100px;
    text-align: start;
    min-height: calc(100vh - 30px);

    *{
        margin: 1% 0;
    }
`

function NewsDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const newsItem = useSelector(state => state.news.news.find(item => item.id == id));

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    if (!newsItem) {
        return <div>Loading...</div>;
    }

    return (
        <Article>
            <h1 className='news-detail-title'>{newsItem.title}</h1>
            <img src={newsItem.img} />
            {newsItem.article.map((section, index) => (
                <div key={index}>
                    <h2>{section.subtitle}</h2>
                    {section.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            ))}
        </Article>
    );
}

export default NewsDetails;