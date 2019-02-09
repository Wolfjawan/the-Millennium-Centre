import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Default from './default'
// import Private from './private'
import Home from '../screens/home'
import Students from '../screens/students'
import TheMillenniumCafe from '../screens/theMillenniumCafe'
import Crafts from '../screens/crafts'
import AboutUs from '../screens/aboutUs'
import NotFound from '../components/notFound'

class Routs extends Component {
    render() {
        return (
            <Switch>
            <Default exact path="/" component={Home} />
            <Default exact path="/students" component={Students} />
            <Default exact path="/cafe" component={TheMillenniumCafe} />
            <Default exact path="/crafts" component={Crafts} />
            <Default exact path="/about" component={AboutUs} />
            <Route component={NotFound} />
          </Switch>
        );
    }
}

export default Routs