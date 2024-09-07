import axios from 'axios';
import React from 'react';

const url = "http://3.17.216.66:4000/filter";

const CuisineFilter = (props) => {

    const handleFilter=(event) => {
        let mealId = props.mealId;
        let cuisineId = event.target.value;
        let cuisineUrl = ""
        if(cuisineId === ""){
            cuisineUrl = `${url}/${mealId}`
        }else{
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }

        axios.get(cuisineUrl)
        .then((res) => {props.restPerCusine(res.data)})
    }

    return(
        <>
            <center><h3>Cuisine Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                <label className='radio'>
                    <input type="radio" name="cuisine" value=""/>All
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="1"/>North Indain
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="2"/>South Indian
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="3"/>Chinese
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="4"/>Fast Food
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="5"/>Street Food
                </label>
            </div>
        </>
    )

}

export default CuisineFilter