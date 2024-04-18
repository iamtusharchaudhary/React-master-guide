# React Router
React Router is a popular library for handling navigation in React applications. It enables the creation of single-page applications with navigation that feels like a traditional multi-page website. React Router provides a set of navigational components and a declarative approach to define the routes of your application.

# Setup React With Router
### Step 1 :-
> npx create-react-app my-app
### Step 2 :-
> npm install react-router-dom@6

# React Router Dom Components

> BrowserRouter

> Routes

> Route

> Link

> Navlink

# App Component
```
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import Page from './Page'
import Post from './Post'
import Profile from './Profile'
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
          <Route path="/page" element={<InsertData/>}/>
          <Route path="/post" element={<ViewData/>}/>
          <Route path="/profile" element={<DeleteData/>} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
```

# Header Component
```
import {NavLink } from 'react-router-dom'
function Header() {
  return (
      <>
          <header>
              <a href="home">Logo</a>
              <nav>
                  <ul>
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/page">Page</NavLink></li>
                      <li><NavLink to="/post">Post</NavLink></li>
                      <li><NavLink to="/profile">Profile</NavLink></li>
                  </ul>
              </nav>
          </header>
      </>
  )
}
export default Header;
```

# Home Component
```
import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';
function Home() {
  return (
      <>
          <Header />
          <Outlet />
          
      </>
  )
}
export default Home;
```
