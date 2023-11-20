import './Portfolio.css'

import NasaSite from '../assets/NASA-API.png'
import HealthcareSite from '../assets/project-2.png'
import Jate from '../assets/JATE.png'
import WeatherApp from '../assets/weather-app.png'
import PasswordGen from '../assets/password-generator.png'
import QuizApp from '../assets/quiz-app.png'

export default function Portfolio() {
    return (
        <div>
            <h1 className="display-6 text-center m-4 title-custom">My Portfolio</h1>

            <div className='row col-10 mx-auto'>
                <div className='col-12 col-md-6 my-4'>
                    <a href="https://chrisdehaan.github.io/Team-SCCRM/" target="_blank">
                        <img src={NasaSite} className='imgEl' />
                    </a>
                </div>
                <div className='col-12 col-md-6 my-4'>
                    <a href="https://sccrm-healthcare-bbafb87ca81b.herokuapp.com/" target="_blank">
                        <img src={HealthcareSite} className='imgEl' />
                    </a>
                </div>
                <div className='col-12 col-md-6 my-4'>
                    <a href="https://just-another-note-taker-cwd-fa89b7859e8d.herokuapp.com/" target="_blank">
                        <img src={Jate} className='imgEl' />
                    </a>
                </div>
                <div className='col-12 col-md-6 my-4'>
                    <a href="https://chrisdehaan.github.io/Weather-App/" target="_blank">
                        <img src={WeatherApp} className='imgEl' />
                    </a>
                </div>
                <div className='col-12 col-md-6 my-4'>
                    <a href="https://chrisdehaan.github.io/Password-Generator/" target="_blank">
                        <img src={PasswordGen} className='imgEl' />
                    </a>
                </div>
                <div className='col-12 col-md-6 my-4'>
                    <a href="https://chrisdehaan.github.io/Timed-Quiz/" target="_blank">
                        <img src={QuizApp} className='imgEl' />
                    </a>
                </div>
            </div>
        </div>
    )
}