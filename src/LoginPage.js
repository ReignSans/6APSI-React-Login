import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (i) => {
        i.preventDefault();
        if (username.trim() && password.trim()) {
        navigate('/landing', { state: { username } });
        } else {
        setError('Please enter both username and password');
        }
    };
    
    return(
        <div className='loginContainer'>
            {error && <div className="error-message">{error}</div>}
            <form className='loginForm' onSubmit={handleLogin}>
                <h1 className='loginTitle'>Log In</h1>
                
                <div className='inputField'>
                    <input type='text' id='username' name='username' required 
                    value={username} onChange={(i) => setUsername(i.target.value)}/>
                    <label className='label'>
                        <div className='text'>Username</div>
                    </label>
                </div>

                <div className='inputField'>
                    <input type='password' id='password' name='password' required 
                    value={password} onChange={(i) => setPassword(i.target.value)}/>
                    <label className='label'>
                        <div className='text'>Password</div>
                    </label>
                </div>

                <button type='submit' className='loginButton'>Log In</button>
            </form>
        </div>
    );
}


export default Login;