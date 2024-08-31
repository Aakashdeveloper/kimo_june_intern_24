import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = "http://3.17.216.66:4000/quicksearch";

const QuickSearch = () => {

    const[mealType,setMealType] = useState([])

    useEffect(() => {
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMealType(data)
        })
    },[])

    return(
        <>
        <div id="quickSearch">
            <span className="quickHeading">Quick Search</span>
            <span className="quickSubHeading">Find Restaurants By MealType</span>
            <QuickDisplay quickData={mealType}/>
        </div>
        </>
    )
}

export default QuickSearch