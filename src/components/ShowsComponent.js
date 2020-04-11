import React from 'react';




function RenderShow({shows}) {
    return (
        shows.map(show => {
            return(
                <div key={show.id} className="col-md">
                    <br />
                    <h2>{show.title}</h2>
                    <h4>{show.subhead}</h4>
                    <h5>{show.address}</h5>
                    <p />
                </div>
            );
        })
    );
}

function Shows({shows}) {
    return(
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <RenderShow shows={shows} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shows;