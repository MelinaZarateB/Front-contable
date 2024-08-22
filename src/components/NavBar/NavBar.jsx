import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate()

    /* Handlers para forms de login/sign-up */
    const handleButtonLogin = () => {
        navigate('/login')
    }
    const handleButtonSignUp = () => {
        navigate('/sign-up')
    }
    return(
        <nav className='container-nav'>
            <div className='parent-buttons-nav'>
            <div className='container-buttons-nav'>
            <button className='button-login' onClick={handleButtonLogin}>Ingresar</button>
            <button className='button-sign-up' onClick={handleButtonSignUp}>Registrarse</button>
            </div>
            </div>
        </nav>
    )
}
export default NavBar;