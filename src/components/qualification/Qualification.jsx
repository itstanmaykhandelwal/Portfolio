import React from 'react'
import './qualification.css'

const Qualification = () => {
    return (
        <section className='qualification section'>
            <h2 className='section__title'>Qualification</h2>
            <span className='section__subtitle'>My Personal Journey</span>

            <div className='qualification__container container'>
                <div className="qualification__tabs">
                    <div className="qualification__tabs">
                        <div className="qualification__buttonn__active button--flex">
                            <i className='uil uil-graduation-cap qualification__icon'></i> Education
                        </div>
                        <div className="qualification__buttonn button--flex">
                            <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
                        </div>
                    </div>

                    <div className="qualification__sections">
                        <div className="qualification__content">
                            <div className="qualification__data">
                                <div>
                                    <h3 className='qualification__title'>Bachelor of Computer Applications</h3>
                                    <span className='qualification__subtitle'>Dr Bhim Rao Ambedkar University</span>
                                    <div className="qualification__calender">
                                        <i className='uil uil-calender-alt '></i> 2019-2022
                                    </div>
                                </div>

                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className='qualification__rounder'></span>
                                    <span className='qualification__line'></span>
                                </div>
                                <div>
                                    <h3 className='qualification__title'>Frontend Developer</h3>
                                    <span className='qualification__subtitle'>Dr Bhim Rao Ambedkar University</span>
                                    <div className="qualification__calender">
                                        <i className='uil uil-calender-alt '></i> 2019-2022
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification