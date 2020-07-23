import React, { useState } from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import './Navbar.css'

function Navbar() {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const history = useHistory();

    function login(e) {
        e.preventDefault();
        var login = false;
        var users = JSON.parse(localStorage.getItem('user'));
        for (let user of users) {
            if (user.uname === username && user.password === pass) {
                login = true
                var data = localStorage.getItem('loggedin');
                data = true;
                localStorage.setItem('loggedin', data);
            }
        }
        if (login) {
            alert('Login Successfully!!')
            history.push('/dashboard');
            window.location.reload(true);
        }
        else {
            alert('ERROR!! Check your Credentials again');
            history.push('/');
        }
    }

    function logout(){
        var data = localStorage.getItem('loggedin');
        data = false;
        localStorage.setItem('loggedin',data);
        alert('You are Successfully Logged Out!!')
        history.push('/');
        window.location.reload(true);
    }

    return <div className='row nav'>
        <div className="col-md-6"><h3>Facebook</h3></div>
        <div className="col-md-6">
            {
                (() => {
                    if (JSON.parse(localStorage.getItem('loggedin'))) {
                        return <button className="btn btn-primary" onClick={logout}>Logout</button>
                    }
                    else {
                        return <div>
                            <input type="text" placeholder="Enter username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                            <input type="password" placeholder="Enter password" value={pass} onChange={(e) => { setPass(e.target.value) }} />
                            <button className="btn btn-primary" onClick={login}>Login</button>
                        </div>
                    }
                })()
            }
        </div>
    </div>
}

export default Navbar;