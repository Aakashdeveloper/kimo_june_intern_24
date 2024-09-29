import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

const lurl = "http://127.0.0.1:6001/api/auth/register"


const Register = () => {

    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        role:""
    })

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
        .then(navigate('/'))
    }
 
    return(
       <>
       <div className='container'>
           <div className='panel panel-primary'>
               <div className='panel-heading'>
                   <h3>Register</h3>
               </div>
               <div className="panel-body">
                   <div className='row'>
                        <div className='col-md-6 form-group'>
                           <label>Name</label>
                           <input className='form-control' name="name"
                           value={formData.name}
                           onChange={handleChange}/>
                        </div>
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
                        <div className='col-md-6 form-group'>
                           <label>Phone</label>
                           <input className='form-control' name="phone"
                           value={formData.phone}
                           onChange={handleChange}/>
                       </div>
                       <div className='col-md-6 form-group'>
                           <label>Role</label>
                           <input className='form-control' name="role"
                           value={formData.role}
                           onChange={handleChange}/>
                       </div>
                       <button className="btn btn-warning"
                       onClick={handleSubmit}>
                           Register
                        </button>
                   </div>
               </div>
           </div>
       </div>
       </>
    )
}

export default Register;