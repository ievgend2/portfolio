import { React } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import './app.css'
import '../../index.css'
import '../../../src/'

import Navigation from '../Navigation'
import Skills from '../Skills'
import Contact from '../Contact'
import Projects from '../Projects'

import * as ROUTES from '../../constants/routes'
import Footer from '../Footer'
import Maintenance from '../Maintenance'
import MainPage from '../Main'
import About from '../About'

const App = () => (
  <Router basename="/portfolio/">
    <Route exact path={ROUTES.MAINPAGE} component={MainPage} />
    <Route exact path={ROUTES.PROJECTS} component={Projects} />
    <Route exact path={ROUTES.CONTACT} component={Contact} />
    <Route exact path={ROUTES.SKILLS} component={Skills} />
    <Route exact path={ROUTES.MAINTENANCE} component={Maintenance} />
    <Route exact path={ROUTES.ABOUT} component={About} />
  </Router>
)

export default App
