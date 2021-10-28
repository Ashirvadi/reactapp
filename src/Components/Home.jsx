import React from 'react';
import Web from "../Images/colors-155896_960_720.webp";
import Commonpage from './Commonpage';
const Home = () => {
    return (
        <>
            <Commonpage target="/contact" title="Get Start with " btnName="Contactus" imgsrc={Web} />
        </>
    );
};

export default Home;