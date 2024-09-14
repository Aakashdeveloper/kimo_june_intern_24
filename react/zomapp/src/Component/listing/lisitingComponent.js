import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './listing.css';
import axios from 'axios';
import ListingDisplay from './listingDisplay'
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';

const baseUrl = "http://3.17.216.66:4000"

const Listing = () => {

    let params = useParams();

    const [restList, setRestList] = useState()

    let mealId = params.mealId;

    useEffect(()=>{
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${baseUrl}/restaurant?mealtype_id=${mealId}`)
        .then((res) => {
            setRestList(res.data)
        })
    },[])

    const setDataPerFilter = (data) => {
        setRestList(data)
    }

    return(
        <>
            <div className='row'>
                <div id='mainListing'>
                    <div id="filter">
                        <CuisineFilter mealId={mealId}
                        restPerCusine={(data) => {setDataPerFilter(data)}}/>
                        <CostFilter mealId={mealId}
                        restPerCost={(data) => {setDataPerFilter(data)}}/>
                    </div>
                </div>
                <ListingDisplay listData={restList}/>
            </div>
            
        </>
    )

}

export default Listing