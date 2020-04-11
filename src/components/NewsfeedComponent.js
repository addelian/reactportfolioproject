import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderArticleItem({article}) {
    return (
        <Link to={`/newsfeed/${article.id}`}>
            <Card className="card">
                    <CardTitle>
                        <br />
                        <h1>{new Intl.DateTimeFormat(
                        'en-US', { year: 'numeric', month: 'short', day: 
                        '2-digit'}).format(new Date(Date.parse(article.date)))}</h1>
                    </CardTitle>
                    <hr />
                    <CardTitle className="header">{article.title}</CardTitle>
                    <CardBody><h4>{article.subhead}</h4></CardBody>
            </Card>
        </Link>
    )
}

function Newsfeed({articles}) {

    const revArticles = articles.slice().reverse();

    const feed = revArticles.map(article => {
        return(
            <div key={article.id} className="col-md m-1">
                <RenderArticleItem article = {article} />
                <p />
            </div>
        );
    });

    return (
        <div className="page">
            <div className="container">
                {feed}
            </div>
        </div>
    );

}


export default Newsfeed;