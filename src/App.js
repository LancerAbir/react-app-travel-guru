import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Destination from './components/pages/Destination';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Hotel from './components/pages/Hotel';
import NotFound from './components/pages/NotFound';
import PrivateRoute from './components/pages/PrivateRoute';
import travelData from './travelData';



//** Context API */
export const UserContext = createContext()


const App = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [travels, setTravels] = useState(travelData)


  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, travels, setTravels]}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/destination" component={Destination} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute path="/hotel">
              <Hotel></Hotel>
            </PrivateRoute>
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
