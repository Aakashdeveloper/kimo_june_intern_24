import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';

const url = "http://127.0.0.1:6001/api/auth/userinfo"

const Profile = () => {
    const [user,setUser] = useState()
    const navigate = useNavigate();

    const userData = async()=>{
        const response = await fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })

        const data = await response.json()
        setUser(data)
    }

    useEffect(() => {
        userData()
    },[])

    const handleLogout = () =>{
        sessionStorage.removeItem('ltk')
        navigate('/')
    }

    const renderData = (data) => {
        if(data){
            sessionStorage.setItem('rtk',data.role)
            return(
                <>
                    <h2>Hii {data.name}</h2>
                    <h3>Your Email Id is {data.email}</h3>
                    <h3>Your Phone Number is {data.phone}</h3>
                    <h3>Your Role is {data.role}</h3>
                </>
            )
        }

    }

    const conditionalRender =(data) =>{
        if(data){
            if(data.role.toLowerCase() === "admin"){
                return(
                    <Link to="/users" className='btn btn-success'>
                        Users
                    </Link>
                )
            }
        }

    }
 

    if(sessionStorage.getItem('ltk') === null){
        navigate('/')
    }else{
        return(
            <div className='container'>
                <div className='panel panel-danger'>
                    <div className="panel-heading">
                        <h3>Profile</h3>
                    </div>
                    <div className="panel-body">
                        {renderData(user)}
                        {conditionalRender(user)} &nbsp;
                        <button className='btn btn-danger'
                        onClick={handleLogout}>
                            Logout
                        </button>

                    </div>


                </div>
            </div>
        )
    }
    
}

export default Profile;