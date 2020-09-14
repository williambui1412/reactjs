import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/Common/Footer';
import Header from './components/Common/Header';
import BlogPage from './containers/BlogPage';
import Cart from './containers/Cart';
import Category from './containers/CatPage';
import ContactPage from './containers/ContactPage';
import DetailBlog from './containers/DetailBlog';
import DetailPage from './containers/DetailPage';
import HomePage from './containers/HomePage';
import Page404 from './containers/Page404';
import ReduxThunk from './containers/Redux-thunk';

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
          <Route path="/redux-thunk" component={ReduxThunk} />
          <Route path="/blog/:postid" component={DetailBlog} />
          <Route component={Page404} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
