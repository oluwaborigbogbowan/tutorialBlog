
import About from './About';
import Footer from './Footer';
import Home from './Home';
import Missing from './Missing';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import { Route, Routes, Switch, useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';


function App() {
  return (
    <div className="App">
      
      <Nav/>
      <Routes>
        {/* <Route path='/'>
          <Home/>
        </Route>
        <Route path='/post'>
          <NewPost/>
        </Route>
        <Route path='/post/:id'>
          <PostPage/>
        </Route> */}
        <Route path='/about' component={About}/>
        <Route path='*' component={Missing}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
