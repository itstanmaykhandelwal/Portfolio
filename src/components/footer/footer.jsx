import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h2 className='footer__title'>Tanmay</h2>

            <ul className='footer__list'>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#portfolio" className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href="#about" className='footer__link'>Testimonials</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href="https://github.com/itstanmaykhandelwal" className='footer__social-icon' target='_blank' rel="noreferrer">
                    <i class="bx bxl-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/itstanmaykhandelwal/" className='footer__social-icon' target='_blank' rel="noreferrer">
                    <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/itstanmaykhandelwal/" className='footer__social-icon' target='_blank' rel="noreferrer">
                    <i class="bx bxl-instagram"></i>
                </a>   
            </div>
            <span className='footer__copy'>
                &#169; Tanmay Khandelwal. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer