import React,{useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';

const lurl = ""


const Register = () => {

    const [formData,setFormData] = useState({
        email:"",
        password:""
    })

    const handleChange = () => {

    }

    const handleSubmit = () => {
        
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
                           <input className='form-control' name="email"
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