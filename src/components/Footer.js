import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='container footer-wrapper'>
            <div className='top-footer'>
                <h1>Come and make first step in your
                    project! <Link to='/estate' className='foot-head-link'>Let us stand out</Link></h1>
                <p>Starting is always the hardest part. It takes a lot of effort and time but it is worth it.
                  Believe us yet? <Link to='/about' className='foot-head-link'>Check it out yourself</Link></p>
            </div>
            <div className='bottom-footer'>
                <div className='bottom-footer-wrapper'>
                    <Link to="/"  className='footer-logo'>
                        ACE <i class="fas fa-spa"></i>
                    </Link>
                    <div className='footer-p'>
                        <p>
                        This is the site for you
                        </p>
                    </div>
                    <div className='footer-p-1'>
                        <p>
                        08166739470
                        </p>
                    </div>
                    <div className='footer-socials'>
                        <a href='https://www.instagram.com/'><i class="fas fa-atom"></i></a>
                        <a href='https://twitter.com/'><i class="fas fa-gas-pump"></i></a>
                        <a href='https://www.linkedin.com/'><i class="fab fa-typo3"></i></a> 

                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer;