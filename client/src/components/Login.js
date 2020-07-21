import React, {useState} from "react";
import axios from 'axios';


const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username:'',
    password:''
  })
  
  const handleChange = e=>{
    setCredentials({
      ...credentials,[e.target.name]: e.target.value
    })
  }

  const login = e => {
        e.preventDefault();
        // make a post request to the login endpoint on the server
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.payload);
                // redirect the user to the app's main logged in page
                props.history.push('/protected');
            })
            .catch(err => console.log({ err }));
    };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
            <div>
                <form onSubmit = {login}>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        placeholder='Username'
                        value = {credentials.username}
                        onChange = { handleChange}
                    />
                    <input
                        type='text'
                        name='password'
                        id='password'
                        placeholder='Password'
                        value = {credentials.password}
                        onChange = {handleChange}

                    />
                    <button>Login</button>
                </form>
            </div>
        );
};

export default Login;
