import { useNavigate, useLocation } from 'react-router-dom';
import './Landing.css';

function Landing() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleLogOut = () => {
        navigate('/login', { replace: true });
    } 

    return(
        <div className='landingContainer'>
            <h2>Succesfully Logged in!</h2>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    );
}

export default Landing;