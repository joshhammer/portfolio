import React from 'react'
import './About.scss'

function About() {
    return(
        <div className='about-page-wrapper'>
            <div className='about-page-content'>
                <div className='about-section-upper'>
                    <h1 className='about-title'>about me</h1>
                    <h3 className='about-subtitle'>i am a musician and front-end web developer</h3>
                    <p className='about-paragraph'>
                        I’m naturally inquisitive and enjoy figuring out how things work. I have a defined sense of aesthetic and enjoy 
                        making thoughtful, engaging, and functional web applications that have a simple, clean and distinct design.
                        I’ve built web applications using Ruby on Rails, Node.js and React and have a strong foundation in web design and development. 
                        I've recently completed Coder Academy’s 6 month web development bootcamp. Before moving into development, I worked in the Library 
                        and Information Management sector, where I produced and managed content. When I'm not coding, I enjoy spending time with friends, 
                        family and my two cats, Willow and Orlando.
                    </p>
                </div>
                <div className='about-section-lower'>
                    <h2 className='interests-title'>interests and likes</h2>
                    <div className='interests-box'>
                        <p className='interest-tag'>Synthesizers</p>
                        <p className='interest-tag'>Tennis</p>
                        <p className='interest-tag'>Trevor Noah</p>
                        <p className='interest-tag'>Wildlife</p>
                        <p className='interest-tag'>Satire</p>
                        <p className='interest-tag'>John Oliver</p>
                        <p className='interest-tag'>Documentaries</p>
                        <p className='interest-tag'>Roger Federer</p>
                        <p className='interest-tag'>Wes Anderson Movies</p>
                        <p className='interest-tag'>Guitars</p>
                        <p className='interest-tag'>Politics</p>
                        <p className='interest-tag'>Ricky Gervais</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About