import logo from './logo.svg';
import './App.css';
import Home from './Views/Home/Home';
import About from './Views/About/About';
import Todo from './Views/TodoList/Todo';
import Nav from './Views/Navagation/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import User from './Views/Users/User';
import DetailUser from './Views/Users/DetailUser';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/user" exact>
            <User />
          </Route>
          <Route path="/user/:id">
            <DetailUser />
          </Route>
        </Switch>
        
      </header>
      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
      <ToastContainer />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
