import React from 'react';
import { NavLink } from 'react-router-dom';
const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top img-fluid" alt="images" />
                    <div className="card-body">
                        <h5 className="card-title">{props.cardtitle}</h5>
                        <p className="card-text">{props.cardtext}</p>
                        <NavLink to="{props.target}" className="btn btn-primary">{props.btnname}</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;