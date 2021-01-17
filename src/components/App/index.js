import { React } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./app.css"

import Navigation from '../Navigation';
import Skills from '../Skills';
import Contact from '../Contact';
import Projects from '../Projects';

import * as ROUTES from '../../constants/routes';
import Footer from "../Footer";



const App = () => (



  <Router>
    <div className="">
      <Navigation />
      <div className="main-content">
        <Route path={ROUTES.CONTACT} component={Contact} />
        <Route path={ROUTES.SKILLS} component={Skills} />
        <Route exact path={ROUTES.PROJECTS} component={Projects} />
      </div>
      <Footer />
    </div>
  </Router>
);


export default App;
