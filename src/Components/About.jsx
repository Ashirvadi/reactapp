import React from 'react';
import Web from "../Images/scalable-vector-graphics.png";
import Commonpage from './Commonpage';
const About = () => {
    return (
        <>
            <Commonpage target="/service" title="Welcome to About page" btnName="Let Start" imgsrc={Web} />
        </>
    );
};

export default About;