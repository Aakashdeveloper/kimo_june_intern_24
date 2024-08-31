import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom'

const QuickSearch = (props) => {
    console.log("props",props)

    const listMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`} className="tileContainer">
                        <div className="tileComponent1">
                            <img src={item.meal_image} alt="dinner"/>
                        </div>
                        <div className="tileComponent2">
                            <div className="compHeading">
                                <h3>{item.mealtype}</h3>
                                <p class="para">{item.content}</p>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }

    return(
        <>
            <div className="mainBox">
                {listMeal(props)}
            </div>
  
        </>
    )
}

export default QuickSearch