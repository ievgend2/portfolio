import { React } from "react";
import { HashRouter as Router, Route } from 'react-router-dom';
import "./app.css"
import "../../index.css"
import Navigation from '../Navigation';
import Skills from '../Skills';
import Contact from '../Contact';
import Projects from '../Projects';

import * as ROUTES from '../../constants/routes';
import Footer from "../Footer";



const App = () => (



  <Router basename="/portfolio">
    <div className="">
      <Navigation />
      <div className="main-content">
        <Route exact path={ROUTES.PROJECTS} component={Projects} />
        <Route exact path={ROUTES.CONTACT} component={Contact} />
        <Route exact path={ROUTES.SKILLS} component={Skills} />
      </div>
      <Footer />
    </div>
  </Router>
);


export default App;
