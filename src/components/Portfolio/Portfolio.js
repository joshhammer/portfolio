import React from 'react'
import './Portfolio.scss'
import { Link } from 'react-router-dom'
import etchSketch from '../../assets/screenshots/etch-a-sketch.gif'
import rgbGuessr from '../../assets/screenshots/rgb-guessr.gif'
import shooter from '../../assets/screenshots/shooter.gif'
import todo from '../../assets/screenshots/todo.gif'
import razzpay from '../../assets/screenshots/razzpay.png'
import synthpop from '../../assets/screenshots/synthpop.png'
import rockPaper from '../../assets/screenshots/rock-paper.gif'

function Portfolio() {
    return (
        <div className='portfolio-page-wrapper'>
            <div className='portfolio-page-content'>
                <div className='portfolio-section-upper'>
                    <div className='portfolio-title-box'>
                        <h1 className='portfolio-title'>portfolio</h1>
                        <div className='back-btn'>
                            <p>Back</p>
                            <Link to='/'>
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-circle-left" className="svg-inline--fa fa-arrow-circle-left fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm28.9-143.6L209.4 288H392c13.3 0 24-10.7 24-24v-16c0-13.3-10.7-24-24-24H209.4l75.5-72.4c9.7-9.3 9.9-24.8.4-34.3l-11-10.9c-9.4-9.4-24.6-9.4-33.9 0L107.7 239c-9.4 9.4-9.4 24.6 0 33.9l132.7 132.7c9.4 9.4 24.6 9.4 33.9 0l11-10.9c9.5-9.5 9.3-25-.4-34.3z"></path></svg>
                            </Link>
                        </div>
                    </div>
                    
                    <div className='portfolio-work-container'>
                        <div className='portfolio-card'>
                            <h3 className='portfolio-card-title'>RGB Guessing Game</h3>
                            <div className='portfolio-card-border-box'>
                                <img className='portfolio-card-image' src={rgbGuessr} alt="rgb gif"/>
                                <p className='portfolio-card-text'>A RGB color guessing game made with Vanilla JS. Part of a udemy web-developer course exercise.</p>
                                <a href='https://github.com/joshhammer/colorGame' target='_blank' rel="noopener noreferrer">Github Repo and Page</a>
                            </div>
                        </div>

                        <div className='portfolio-card'>
                            <h3 className='portfolio-card-title'>etch-a-sketch</h3>
                            <div className='portfolio-card-border-box'>
                                <img className='portfolio-card-image' src={etchSketch} alt="etch-a-sketch gif"/>
                                <p className='portfolio-card-text'>A simple "Etch-a-Sketch" board made with Vanilla JS. Exercise for "The Odin Project".</p>
                                <a href='https://github.com/joshhammer/etch-a-sketch' target='_blank' rel="noopener noreferrer">Github Repo and Page</a>
                            </div>
                        </div>

                        <div className='portfolio-card'>
                            <h3 className='portfolio-card-title'>Todo List</h3>
                            <div className='portfolio-card-border-box'>
                                <img className='portfolio-card-image' src={todo} alt="rgb gif"/>
                                <p className='portfolio-card-text'>A simple todo list using React & Redux. there's a strange little bug I still have to fix though :)</p>
                                <a href='https://github.com/joshhammer/react-todo' target='_blank' rel="noopener noreferrer">Github Repo and Page</a>
                            </div>
                        </div>
                        
                        <div className='portfolio-card'>
                            <h3 className='portfolio-card-title'>Retro Shooter</h3>
                            <div className='portfolio-card-border-box'>
                                <img className='portfolio-card-image' src={shooter} alt="rgb gif"/>
                                <p className='portfolio-card-text'>A unfortunately half-finished retro-looking shooter game made with Vanilla JS and CSS animations.</p>
                                <a href='https://github.com/joshhammer/arcade-shooter' target='_blank' rel="noopener noreferrer">Github Repo and Page</a>
                            </div>
                        </div>


                        <div className='portfolio-card'>
                            <h3 className='portfolio-card-title'>Bootcamp Project</h3>
                            <div className='portfolio-card-border-box'>
                                <img className='portfolio-card-image razzpay-img' src={razzpay} alt="rgb gif"/>
                                <p className='portfolio-card-text'>A payroll management app. Final group project of the propulsion academy full-stack bootcamp.</p>
                                <a href='https://github.com/joshhammer/propulsion-final-project' target='_blank' rel="noopener noreferrer">Github Repo and Page</a>
                            </div>
                        </div>

                        <div className='portfolio-card'>
                            <h3 className='portfolio-card-title'>Josh Hammer</h3>
                            <div className='portfolio-card-border-box'>
                                <img className='portfolio-card-image hammer-img' src={synthpop} alt="rgb gif"/>
                                <p className='portfolio-card-text'>A band website made with HTML and CSS for my own 80s Synthpop solo-project.</p>
                                <a href='https://github.com/joshhammer/synthpop' target='_blank' rel="noopener noreferrer">Github Repo and Page</a>
                            </div>
                        </div>

                        <div className='portfolio-card'>
                            <h3 className='portfolio-card-title'>Rock, Paper, Scissors</h3>
                            <div className='portfolio-card-border-box'>
                                <img className='portfolio-card-image hammer-img' src={rockPaper} alt="rgb gif"/>
                                <p className='portfolio-card-text'>A little Rock, Paper, Scissors game. Exercise for a udemy web-developer course.</p>
                                <a href='https://github.com/joshhammer/rock-paper-scissors' target='_blank' rel="noopener noreferrer">Github Repo and Page</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio