import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <header>
            <div id="brand">
                Developer Funnel 
                &nbsp; <Link to="/" className="btn btn-primary">Home</Link>
            </div>
            <div id="social">
                    <a>
                        <img src="https://i.ibb.co/bsXv4bf/facebook.png" alt="fblogoaoo" className="socialIcon"/>
                    </a>
                    <a href="">
                        <img src="https://i.ibb.co/8c9LJP1/insta.png" alt="fblogo" className="socialIcon"/>
                    </a>
                    <a href="">
                        <img src="https://i.ibb.co/w07K2Vn/youtube1.png" alt="fblogo" className="socialIcon"/>
                    </a> 
            </div>

        </header>
    )
}

export default Header;
