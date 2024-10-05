import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import Login from './login';
import Register from './register';
import Main from './main';
import Profile from './profile';
import UserList from './userList'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/users" element={<UserList/>}/>

                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;