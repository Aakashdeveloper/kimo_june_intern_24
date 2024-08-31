import React from 'react';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './listing/lisitingComponent';
import Main from './main'

const Routing = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="listing/:mealId" element={<Listing/>}/>

                    </Route>
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}

export default Routing