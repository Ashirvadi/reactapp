import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbarmenu from "./Components/Navbarmenu";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Footerpage from './Components/Footerpage';
const App = () => {
    return (
        <>
            <Navbarmenu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Services} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>
            <Footerpage />
        </>
    );
};
export default App;