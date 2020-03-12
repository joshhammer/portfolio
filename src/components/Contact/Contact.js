import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.scss'

function Contact() {
    return (
        <div className='contact-page-wrapper'>
            <div className='contact-page-content'>
                <div className='contact-section-upper'>
                    <div className='contact-title-box'>
                        <h1 className='contact-title'>contact</h1>
                        <div className='back-btn'>
                            <p>Back</p>
                            <Link to='/'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-left" className="svg-inline--fa fa-arrow-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='contact-details-section'>
                    <div className='contact-element contact-element-address'>
                        <div className='contact-element-title-box'>
                            <h3>Adress</h3>
                        </div>
                        <p>Josua Hämmerle</p>
                        <p>Seebahnstrasse 127</p>
                        <p>8003 Zürich</p>
                        <p>Switzerland</p>
                    </div>

                    <div className='contact-element contact-element-phone'>
                        <div className='contact-element-title-box'>
                            <h3>Phone</h3>
                        </div>
                        <p>+41 (0)79 456 77 71</p>
                    </div>

                    <div className='contact-element contact-element-email'>
                        <div className='contact-element-title-box'>
                            <h3>email</h3>
                        </div>
                        <p>josua.haemmerle(at)gmail.com</p>
                    </div>

                    <div className='contact-element contact-element-linkedin'>
                        <div className='contact-element-title-box'>
                            <h3>LinkedIn</h3>
                        </div>
                        <a href='https://www.linkedin.com/in/josua-haemmerle' target='_blank'>Josua Hämmerle</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact