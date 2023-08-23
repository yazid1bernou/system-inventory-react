import React, { useState } from 'react'
import axios  from 'axios';
  const Login = () => {

    const [input , inputSet] = useState({}) ;

    const handleInput = (e) => {
      inputSet(prevState => ({...prevState , [e.target.name] :  e.target.value }));
      console.log(input);
    }

    const  handleLogin = () => {
       axios.post('http://localhost:8000/api/login' , input)
       .then(res => { 
        localStorage.email =  res.data.email 
       

       })
    }
    return (
        <div  className="container-fluid bg-theme" id={"login"}>
            <div className='row'>
                    <div className="col-md-6">
                        <div className="card ">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body"> 
                                <label className={'w-100'}>
                                    <p> Email /Phone</p>
                                    <input 
                                    className={'form-control mt-2'}
                                    type={'text'}
                                    name={'email'}
                                    value={input.email}
                                    onChange={handleInput}
                                    />
                                </label>
                                <label className={'w-100'}>
                                    <p> Password</p>
                                    <input 
                                    className={'form-control mt-4'}
                                    type={'password'}
                                    name={'password'}
                                    value={input.password}
                                    onChange={handleInput}
                                   
                                    />
                                </label>
                                <div className="d-grid mt-4">
                                    <button className={'btn btn-outline-success'} onClick={handleLogin}>  Login</button>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}


export default Login ;