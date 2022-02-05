import './Navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav 
        className='Nav'>
            
            <h1 style={{color: "green"}}>
                <Link 
                to='/transactions'>Budget App</Link>
            </h1>

            <button >
                <a
                style={{color: "green"}}
                href='/transactions/new'>NEW</a>
            </button>
            
        </nav>
    );
};


