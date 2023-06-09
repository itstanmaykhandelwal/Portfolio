import React from 'react'

// assets
import Scroll from '../../assets/scroll.svg'

const ScrollDown = () => {
    return (
        <div className='home__scroll'>
            <a href="#about" className='home__scroll-button button--flex'>
                <img src={Scroll} alt="scroll" />
                <span className='home__scroll-name'>Scroll Down</span>
                <i class="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    )
}

export default ScrollDown