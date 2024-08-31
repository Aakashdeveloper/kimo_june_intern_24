import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './listing.css';
import axios from 'axios';
import ListingDisplay from './listingDisplay'

const baseUrl = "http://3.17.216.66:4000"

const Listing = () => {

    let params = useParams();

    const [restList, setRestList] = useState([])

    let mealId = params.mealId;

    useEffect(()=>{
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${baseUrl}/restaurant?mealtype_id=${mealId}`)
        .then((res) => {
            setRestList(res.data)
        })
    },[])

    return(
        <>
            <h1>Listing</h1>
            <ListingDisplay listData={restList}/>
        </>
    )

}

export default Listing