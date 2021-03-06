import React from 'react'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import './LandingPage.scss'

function Landingpage() {
    return(
        <div className='landing-page-wrapper'>
            <div className='landing-page-content'>
                <div className='landing-page-content-upper'>
                    <h1 id='name-introduction'>hi, my name is <br/>josua hämmerle.</h1>
                    <h1 id='developer-introduction'>i am a developer <br/>based in zurich.</h1>
                </div>
                <div className='landing-page-content-lower'>
                        <h1 id='know-more'>want to know more?</h1>
                        <div className='navigation-links'>
                            <Link to="/about">about</Link>
                            <Link to="/skills">skills</Link>
                            <Link to="/work">portfolio</Link>
                            <Link to="/music">music</Link>
                            <Link to="/contact">contact</Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Landingpage)