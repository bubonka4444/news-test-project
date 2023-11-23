import './App.css';
import NewsList from './Components/NewsList';
import store from './redux/store';
import { Provider } from 'react-redux';
import React from 'react';
import NewsDetails from './Components/NewsDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register';
import Layout from './Layout/Layout';





function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path={''} element={<Layout/>}>
          <Route exact path='/news' element={<NewsList/>} />
          <Route path='/news/:id' element={<NewsDetails/>} />
          <Route path='register' element={<Register/>} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
