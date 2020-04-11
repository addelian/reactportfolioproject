import React from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderFeaturedArticle({item}) {
    return (
        <Link to={`/newsfeed/${item.id}`}>
            <Card className="card">
                <CardBody>
                    <CardTitle className="header">{item.title}</CardTitle>
                    <CardText>{item.subhead}</CardText>
                </CardBody>
            </Card>
        </Link>
    )
}

function RenderFeaturedShow({item}) {
    return (
            <Card className="card">
                <CardBody>
                    <CardTitle className="header">{item.title}</CardTitle>
                    <CardText>{item.subhead}</CardText>
                </CardBody>
            </Card>
    )
}

function Home(props) {

        return (
                <div className="page">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 className="display-3">Welcome!</h1>
                                <p>Thanks for stopping by.</p>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2 className="display-4">Featured Article</h2>
                                <RenderFeaturedArticle item={props.article} />
                            </div>
                            <div className="col">
                                <h2 className="display-4">Next Show</h2>
                                <RenderFeaturedShow item={props.show} />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }

export default Home;