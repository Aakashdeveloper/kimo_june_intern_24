import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import Login from './login';
import Register from './register';
import Main from './main';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>

                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;