import React from 'react';
import { Link } from 'react-router-dom';
const Commonpage = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.title} <span className="brand-name">Ashirvadi Nath Dwivedi</span></h1>
                                    <h5 className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                                    <div className="my-3">
                                        <Link to={props.target} className="btn btn-get-started">{props.btnName}</Link>
                                    </div>
                                </div>
                                <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-2 header-image">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="IMAGES" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Commonpage;