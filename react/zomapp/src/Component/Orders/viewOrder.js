import React,{useState,useEffect} from 'react';
import axios from 'axios';
import DisplayOrder from './displayOrder';

const url = "http://localhost:9910/orders";

const ViewOrder = () => {
    const [orders,setOrder] = useState();

    useEffect(() => {
        axios.get(url).then((res) => {setOrder(res.data)})
    },[])

    return(
        <>
            <DisplayOrder orderData={orders}/>
        </>
    )

}

export default ViewOrder;