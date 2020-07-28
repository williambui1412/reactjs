import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Common/Header';
import HomePage from './containers/HomePage';
import Page404 from './containers/Page404';
import Footer from './components/Common/Footer';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import Category from './containers/CatPage';
import DetailPage from './containers/DetailPage';
import Cart from './containers/Cart';
import ContactPage from './containers/ContactPage';
import BlogPage from './containers/BlogPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/categories" component={Category} />
          <Route path="/detail/:postid" component={DetailPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/blogs" component={BlogPage} />
          <Route component={Page404} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
