import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <header>
            <div id="brand">
                Developer Funnel
            </div>
            <div id="social">
                    <a>
                        <img src="https://i.ibb.co/bsXv4bf/facebook.png" alt="fblogo" className="socialIcon"/>
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