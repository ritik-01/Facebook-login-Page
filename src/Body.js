import React from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { useState } from 'react';

function Body(){

    const [name, setName] = useState(''); 
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    function register(e){
        e.preventDefault();
        var users = JSON.parse(localStorage.getItem('user') || "[]")
        var data = {
            'name':name,
            'uname':username,
            'password':pass
        }   
        users.push(data);
        localStorage.setItem('user',JSON.stringify(users))
        alert('Congratulations!! You are registered...')
    }

    return <div className='row p-3'>
        <div className="col-md-6 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTzByHFeQFQhVR2-rtfimR0DkR52f2lMz8y-w&usqp=CAU" alt="facebook" width="100%"/>
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-4 p-2">
            <h1>Register Yourself</h1>
            <form className="form" action="">
                <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                <input type="password" className="form-control" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
                <button className="btn btn-primary register" onClick={register}>Register User</button>
            </form>
        </div>
    </div>
}

export default Body