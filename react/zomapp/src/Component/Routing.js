import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './listing/lisitingComponent';
import Main from './main';
import Details from './details/detailsLogic';

const Routing = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="listing/:mealId" element={<Listing/>}/>
                        <Route path="details" element={<Details/>}/>
                    </Route>
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}

export default Routing