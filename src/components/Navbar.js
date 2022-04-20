import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);
    const[size, setSize] = useState(true);
    const[bg, setBg] = useState(false);
    const showButton =() => {
        if (window.innerWidth <= 760){
            setButton(false);
            setSize(false);
        }
        else {
            setButton(true);
            setSize(true);
        }
    };

    window.addEventListener('resize', showButton);

    useEffect(() =>{
        showButton()
    }, []);

    const changeBg = () => {
        if (window.scrollY >80){
            setBg(true);
        }
        else{
            setBg(false);
        }
    };
    window.addEventListener('scroll', changeBg);


  return (
    <>
        <nav className={bg ? 'navbar active' : 'navbar'}>
            <div className=' container navbar-container'>
                <Link to="/"  className={size ? 'navbar-logo' : 'navbar-logo-center'} onClick ={closeMobileMenu}>
                    ACE <i class="fas fa-spa"></i>
                </Link>
                <div className='menu-icon' onClick ={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick = {closeMobileMenu}>
                        Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" className='nav-links' onClick = {closeMobileMenu}>
                        About us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/Estate" className='nav-links' onClick = {closeMobileMenu}>
                        Our Estates</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/contact" className='nav-links-mobile' onClick = {closeMobileMenu}>
                        Sign Up</Link>
                    </li>
                    <li className='nav-item'>{button && <Button to="/contact" buttonStyle='btn--outline' buttonSize='btn--large'>Meet us</Button>}</li>
                </ul>
                
            </div>
        </nav>
    </>
  )
}

export default Navbar;