import React from 'react'
import './About.scss'
import { Link } from 'react-router-dom'

function About() {
    return(
        <div className='about-page-wrapper'>
            <div className='about-page-content'>
                <div className='about-section-upper'>
                    <div className='about-title-box'>
                        <h1 className='about-title'>about me</h1>
                        <div className='back-btn'>
                            <p>Back</p>
                            <Link to='/'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-left" className="svg-inline--fa fa-arrow-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path></svg>
                            </Link>
                        </div>
                    </div>
                    <h3 className='about-subtitle'>i am a musician and front-end web developer*</h3>
                    <p className='about-paragraph'>
                        I am a thoughtful, sociable person who likes a laugh just as much as having serious conversations about society, work, music etc. 
                        I have a defined sense of aesthetic and love beautiful items, instruments, cars and such. That's also why I enjoy
                        making beautiful, engaging, and functional web applications that have a simple, clean and distinct design.
                        I've recently completed Propulsion Academy’s 3 month full-stack web development bootcamp. Before that, 
                        I've worked mainly in the tech sector, as an IT- and engineering supporter and gained some leadership experience as an IT-support 
                        team lead in a foundation for mentally impaired members of our society. Other than coding, I sometimes like to play a good videogame,
                        I like being outdoors in the mountains or woods for example, and of course I still enjoy making music a lot. 
                        <span className='looking-for-job'>*(currently looking for a job as a junior)</span>
                        
                    </p>
                </div>
                <div className='about-section-lower'>
                    <h2 className='interests-title'>interests and likes</h2>
                    <div className='interests-box'>
                        <p className='interest-tag'>Synthesizers</p>
                        <p className='interest-tag'>Guitars</p>
                        <p className='interest-tag'>Wildlife</p>
                        <p className='interest-tag'>Satire</p>
                        <p className='interest-tag'>Documentaries</p>
                        <p className='interest-tag'>Tennis</p>
                        <p className='interest-tag'>Trevor Noah</p>
                        <p className='interest-tag'>John Oliver</p>
                        <p className='interest-tag'>Movies</p>
                        <p className='interest-tag'>Politics</p>
                        <p className='interest-tag'>Ricky Gervais</p>
                        <p className='interest-tag'>George Carlin</p>
                        <p className='interest-tag'>Videogames</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About