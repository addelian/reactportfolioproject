import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Newsfeed from './NewsfeedComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    render() {
        return (
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/newsfeed' component={Newsfeed} />
                        <Route path='/contact' component={Contact} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
                </React.Fragment>
        );
    }
}

export default Main;