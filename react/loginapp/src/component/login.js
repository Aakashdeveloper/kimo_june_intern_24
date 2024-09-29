import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const lurl = "http://127.0.0.1:6001/api/auth/login"


const Login = () => {

    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        email:"manvi@gmail.com",
        password:"12345678"
    })
    const [message,setMessage] = useState()

    const handleChange = (event) => {
        const{name,value} = event.target;
        setFormData(prevData => ({
            // take already filled value
            ...prevData,
            // new filled value
            [name]:value
        }))
    }

    const handleSubmit = () => {
        console.log(formData)
        axios.post(lurl,formData,{
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then((res) => {
            if(res.data.auth === false){
                setMessage(res.data.token)
            }else{
                sessionStorage.setItem('ltk',res.data.token);
                navigate('/profile')
            }
        })
    }
 
    return(
       <>
       <div className='container'>
           <div className='panel panel-success'>
               <div className='panel-heading'>
                   <h3>Login</h3>
               </div>
               <div className="panel-body">
                   <h2 style={{color:'red'}}>{message}</h2>
                   <div className='row'>
                       <div className='col-md-6 form-group'>
                           <label>Email</label>
                           <input className='form-control' name="email"
                           value={formData.email}
                           onChange={handleChange}/>
                       </div>
                       <div className='col-md-6 form-group'>
                           <label>Password</label>
                           <input className='form-control' name="password"
                           value={formData.password}
                           onChange={handleChange}/>
                       </div>
                       <button className="btn btn-danger"
                       onClick={handleSubmit}>
                           Login
                        </button>
                   </div>
               </div>
           </div>
       </div>
       </>
    )
}

export default Login;