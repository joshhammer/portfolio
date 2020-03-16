import React from 'react'
import { Link } from 'react-router-dom'
import farlow from '../../assets/screenshots/farlow.jpg'
import hammer from '../../assets/screenshots/josh-hammer.jpg'
import './Music.scss'

function Music() {
    return (
        <div className='music-page-wrapper'>
            <div className='music-page-content'>
                <div className='music-section-upper'>
                    <div className='music-title-box'>
                        <h1 className='music-title'>music</h1>
                        <div className='back-btn'>
                            <p>Back</p>
                            <Link to='/'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-left" className="svg-inline--fa fa-arrow-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path></svg>
                            </Link>
                        </div>
                    </div>
                    <h3 className='music-subtitle'>music has always been a passion of mine</h3>
                    <p className='music-paragraph'>
                        As a child I used to sing along in pseudo-english with my favourite beatles and chuck berry songs.
                        Later, my parents made me play the piano, with little success. The fire just wasn't there yet. Only when I was 13 years old
                        - and was listening to the guitar solo of "We Will Rock You" - I knew that this was the instrument I wanted to play. Since then
                        I have written numerous songs, played in various bands and kept improving my singing, songwriting and instrumental skills.
                        Then, a few years ago I discovered a new love: Synthesizers! These magical instruments still never cease to amaze me. 
                        So many knobs and buttons, so many sonic possibilities! Like a playground that never gets boring. Anyway, here's a short list
                        of projects I have been part of or made completely by myself so far:
                    </p>
                </div>
                <div className='music-projects-container'>

                    <div className='music-card'>
                        <h3 className='music-card-title'>farlow</h3>
                        <div className='music-card-border-box'>
                            <img className='music-card-image' src={farlow} alt="farlow pic" />
                            <p className='music-card-text'>Farlow is an indie rock band.</p>
                            <a href='http://www.soundcloud.com/farlowband' target='_blank' rel="noopener noreferrer">Visit Website</a>
                        </div>
                    </div>

                    <div className='music-card'>
                        <h3 className='music-card-title'>Josh Hammer</h3>
                        <div className='music-card-border-box'>
                            <img className='music-card-image' src={hammer} alt="josh hammer pic" />
                            <p className='music-card-text'>Josh Hammer is an 80s Synthpop solo project.</p>
                            <a href='http://joshhammer.bandcamp.com' target='_blank' rel="noopener noreferrer">Visit Website</a>
                        </div>
                    </div>

                    <div className='music-card'>
                        <h3 className='music-card-title'>Milhouse</h3>
                        <div className='music-card-border-box'>
                            <img className='music-card-image' src={hammer} alt="josh hammer pic" />
                            <p className='music-card-text'>Milhouse was an alternative rock band.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Music