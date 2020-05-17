import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SigninScreen(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
       
        return () => {
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        
      }
      
    return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
      <li>
          <h3>Sign-In</h3>
        </li>
        <li>
          <label For="email">
            Email
          </label>
          <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
          </input>
        </li>
        <li>
          <label For="password">Password</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Signin</button>
        </li>
        <li>
          New to amazona?
        </li>
        <li>
          <Link to="/register" className="button secondary text-center" >Create your amazona account</Link>
        </li>
      </ul>
    </form>
  </div>
}
export default SigninScreen;