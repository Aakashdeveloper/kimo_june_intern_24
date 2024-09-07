import axios from 'axios';
import React,{useState,useEffect} from'react';
import {useSearchParams,useNavigate} from 'react-router-dom';
import './details.css';
import {Link} from 'react-router-dom';

const url = "http://3.17.216.66:4000"


const DetailDisplay = () => {

    let navigate = useNavigate()
    const [restDetails, setRestDetails] = useState([]);
    let [searchParmas] = useSearchParams();
    let [mealId] = useState(sessionStorage.getItem('mealId'))

    let restId = searchParmas.getAll('restId')

    useEffect(() => {
        const rDetails = async() => {
            const rdata = await axios.get(`${url}/details/${restId}`)
            setRestDetails(rdata.data[0])
        }

        rDetails()

    },[])

    const proceed = () => {
        navigate(`/placerOrder/${restDetails.restaurant_name}`)
    }
 
    const renderDetails = () => {
        if(restDetails){
            return(
                <>
                    <div className='tileImage'>
                        <div className='imageClass'>
                            <img src={restDetails.restaurant_thumb}
                            alt={restDetails.restaurant_name}/>
                        </div>
                    </div>
                    <div className='tileContent'>
                        <div className='content'>
                            <h1>{restDetails.restaurant_name}</h1>
                            <span id="cfeedback">231 Customer Rating {restDetails.rating_text}</span>
                            <h3>Old Price <del>Rs.950</del></h3>
                            <h3>Offer Price {restDetails.cost}</h3>
                            <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                                <div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/wJvrhYg/veg.png" alt=""/>
                                    </div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                                    </div>
                                </div>
                        </div>
                        <hr/>
                        <div className='col-md-12'>
                            <Link className="btn btn-danger"
                            to={`/listing/${mealId}`}>
                                Back
                            </Link> &nbsp;&nbsp;
                            <button className='btn btn-success'
                            onClick={proceed}>
                                Procced
                            </button>
                        </div>
                    </div>
                </>
            )
        }
    }


    return(
        <div className='main'>
            {renderDetails()}
        </div>
    )

}

export default DetailDisplay