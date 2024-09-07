import React,{useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const orderUrl="http://localhost:9910/orders";

const PlaceOrder = () => {

    let params = useParams();
    let navigate = useNavigate();

    const initialValue = {
        id:Math.floor(Math.random()*1000),
        rest_name:params.restName,
        orderId:`SIO${Math.floor(Math.random()*(498233-21984)+21984)}`,
        name:'Nikita',
        email:'nikki@gmail.com',
        cost:Math.floor(Math.random() * (2000-500)+500),
        phone:'987654231',
        address:'Hno 12 Sec34 Noida'
    }

    const [values, setValue] = useState(initialValue)

    const checkout = () => {
        console.log(values)
        fetch(orderUrl,{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(values)
        })
        .then(navigate('/viewOrder'))

    }

    const handleInputChange = (e)=>{
        const {name,value} = e.target;
        setValue({
            ...values,
            [name]:value
        })
    }

    return(
        <>
            <div className='container'>
                <div className='panel panel-heading'>
                    <h3>Order For Restaurant {values.rest_name}</h3>
                </div>
                <div className='panel panel-body'>
                    <div className='row'>
                        <div className='col-md-12 form-group'>
                            <label htmlFor="orderId" className='control-label'>Order Id</label>
                            <input className='form-control' id="orderId"
                            name="orderId" value={values.orderId} readOnly/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label htmlFor="fname" className='control-label'>Name</label>
                            <input className='form-control' id="fname"
                            name="name" value={values.name} 
                            onChange={handleInputChange}/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label htmlFor="email" className='control-label'>Email</label>
                            <input className='form-control' id="email"
                            name="email" value={values.email}
                            onChange={handleInputChange}/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label htmlFor="phone" className='control-label'>Phone</label>
                            <input className='form-control' id="phone"
                            name="phone" value={values.phone}
                            onChange={handleInputChange}/>
                        </div>
                        <div className='col-md-6 form-group'>
                            <label htmlFor="address" className='control-label'>Address</label>
                            <input className='form-control' id="address"
                            name="address" value={values.address}
                            onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2>Total Price is Rs.{values.cost}</h2>
                        </div>
                    </div>
                    <button className='btn btn-success' onClick={checkout}>
                        Place Order
                    </button>
                </div>
            </div>
        </>
    )

}


export default PlaceOrder