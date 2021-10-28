import React from 'react';
import Sdata from "./Sdata";
import Card from './Card';
const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center brand-name">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, ind) => {
                                    return <Card Key={ind}
                                        imgsrc={val.imgsrc}
                                        cardtitle={val.cardtitle}
                                        cardtext={val.cardtext}
                                        target={val.target}
                                        btnname={val.btnname}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Services;