import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Input = styled.input`
    margin: 0;
    padding: 0.375rem 0.75rem;
    width: 320px;
    height: calc(2rem);
    font-size: 1rem;
    line-height: 1.5;
    background-color: black;
    border: none;
    border-radius: 5px;
    caret-color: white;
    color: #fde9eb;
    

    &: focus, hover {
        border: none;
        outline: none;
        color: #fde9eb;
    }

    @media (max-width: 600px) {
        width: 290px;
    }
`;


const Search = () => {

    const news = useSelector(state => state.news.filteredNews);

    const [searchStarted, setSearchStarted] = useState(false)
    
    //запрос, вводимый пользователем
    let [userRequest, setUserRequest] = useState('')
  
    let handleUserRequestInput = (e) => {
      setUserRequest(e.target.value)
    }
  
    //поиск совпадений в заголовках
    function findEquals (request = '') {
      request = request.toLowerCase();
      let topResult = [];
      for (let item of news) {
        let resultTitle = item.title.toLowerCase();
        if (resultTitle.includes(request) &&
        isCorrectLength(request)) {
          topResult.push(item)
        } else continue
      }
      return topResult;
    }
    
    //поиск начинается, если пользователь ввёл минимум два символа
    function isCorrectLength (str) {
      return (str.length >= 2) ? true : false;
    }
    
    let topResult = findEquals(userRequest);

    console.log(topResult)
  
    return (
    <div className='i-dont-know-how-to-call-it'>
        <div className='search-container'>
            <Input type="search"  placeholder="Поиск..."
            onChange={() => searchStarted ? setSearchStarted(searchStarted) : setSearchStarted(!searchStarted)}
        
            value={userRequest}
            onInput={handleUserRequestInput} 
            />
        </div>
        <section className={(searchStarted &&
          topResult.length > 0) ? 'active' : 'not-active'}>
          
          <ul className='search_result'>
            
            {topResult?.map((resultItem) => (
                
                    <li className="result-item" key={resultItem.id}>
                        <p className="result-item-theme">{resultItem.theme}</p>
                        <Link to={`/news/${resultItem.id}`}>
                            <p className="result-item-theme" onClick={() => setSearchStarted(!searchStarted)}>{resultItem.title}</p>
                        </Link>
                    </li>  
            ))}

          </ul>
        </section>
    </div>
    );
    
  }
  
  export default Search;