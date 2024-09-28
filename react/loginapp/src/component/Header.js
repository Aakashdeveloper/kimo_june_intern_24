import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <Link to="/" class="navbar-brand">Login App</Link>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        {/* <li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li> */}
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li><Link to="/register"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link to="/"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                    </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header;