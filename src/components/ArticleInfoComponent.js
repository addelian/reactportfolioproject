import React from 'react';
import { Card, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderArticle({article}) {
    return (
        <div className="col">
            <Card>
                <CardTitle><h2>{article.title}</h2><br/></CardTitle>
                <CardTitle><h4>{article.subhead}</h4><br/></CardTitle>
                <CardTitle>
                    {new Intl.DateTimeFormat(
                    'en-US', { year: 'numeric', month: 'short', day: 
                    '2-digit'}).format(new Date(Date.parse(article.date)))}
                </CardTitle>
                <CardBody>{article.text}</CardBody>
            </Card>
        </div>
    );
}

function ArticleInfo(props) {
    if (props.article) {
        return (
            <div className="page">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/newsfeed">News</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.article.title}</BreadcrumbItem>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div className="row">
                        <RenderArticle article={props.article} />
                    </div>
                </div>
            </div>
        );
    }
    return <div />;
}

export default ArticleInfo;