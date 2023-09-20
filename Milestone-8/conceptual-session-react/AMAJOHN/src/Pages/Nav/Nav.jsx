import './Nav.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='px-2 py-6 flex mb-8 justify-between shadow-lg '>
            <h1 className='text-2xl font-bold'>Amajohn</h1>
            <ul className='flex justify-end gap-5'>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink  to={'/products'}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={'/dashbord'}>Dashbord</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;