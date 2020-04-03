import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="bg-overlay">
                    <h1 className="display-3">Welcome!</h1>
                    <p>Thanks for stopping by.</p>
                    <hr />
                    <h2 className="display-4">Featured Articles</h2>
                    <hr />
                    <h2 className="display-4">Upcoming Shows</h2>
                    Lorem ipsum.
                </div>
            </React.Fragment>
        );
    }
}

export default Home;