import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Newsfeed from './NewsfeedComponent';
import Shows from './ShowsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ARTICLES } from '../shared/articles';
import { SHOWS } from '../shared/shows';
import ArticleInfo from './ArticleInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES,
            shows: SHOWS
        }
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    article={this.state.articles.filter(article => article.featured)[0]}
                    show={this.state.shows.filter(show => show.featured)[0]}
                />
            );
        }

        const ArticleWithId = ({match}) => {
            return (
                <ArticleInfo
                    article={this.state.articles.filter(article => article.id ===
                    +match.params.articleId)[0]}
                />
            );
        }

        return (
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route path='/home' component={HomePage} />
                        <Route path='/shows' render = {() => <Shows shows={this.state.shows} />} />
                        <Route exact path='/newsfeed' render = {() => <Newsfeed articles={this.state.articles} />} />
                        <Route path='/newsfeed/:articleId' component={ArticleWithId} />
                        <Redirect to='/home' />
                    </Switch>
                    <Footer />
                </React.Fragment>
        );
    }
}

export default Main;