import React from 'react';
import './QuickSearch.css';

const QuickSearch = () => {
    return(
        <>
        <div id="quickSearch">
            <span className="quickHeading">Quick Search</span>
            <span className="quickSubHeading">Find Restaurants By MealType</span>
            <div className="mainBox">
                <div className="tileContainer">
                    <div className="tileComponent1">
                        <img src="images/dinner.png" alt="dinner"/>
                    </div>
                    <div className="tileComponent2">
                        <div className="compHeading">
                            <a href="#">BreakFast</a>
                            <p>Best Deal for BreakFast</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default QuickSearch