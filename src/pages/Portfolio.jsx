import NasaSite from '../assets/NASA-API.png'
import HealthcareSite from '../assets/project-2.png'
import Jate from '../assets/JATE.png'
import WeatherApp from '../assets/weather-app.png'
import PasswordGen from '../assets/password-generator.png'
import QuizApp from '../assets/quiz-app.png'
import GithubLogo from '../assets/github-mark.png'

export default function Portfolio() {
    return (
        <div>
            <h1 className="display-6 text-center m-4 title-custom">My Portfolio</h1>

            <div className='row col-10 mx-auto'>
                <div className='col-12 col-md-6 my-4'>
                    <div className='text-center fs-4 title-custom'>
                        <p>NASA APIs</p>
                    </div>
                    <a href="https://chrisdehaan.github.io/Team-SCCRM/" target="_blank">
                        <img src={NasaSite} className='imgEl' />
                    </a>
                    <div className='text-center mt-2'>
                        <a href='https://github.com/ChrisDeHaan/Team-SCCRM' target='_blank'>
                            <img src={GithubLogo} className='imgRepo' />
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 my-4'>
                    <div className='text-center fs-4 title-custom'>
                        <p>Doctor Portal</p>
                    </div>
                    <a href="https://sccrm-healthcare-bbafb87ca81b.herokuapp.com/" target="_blank">
                        <img src={HealthcareSite} className='imgEl' />
                    </a>
                    <div className='text-center mt-2'>
                        <a href='https://github.com/Elrond-Hubbard/Team-SCCRM-2' target='_blank'>
                            <img src={GithubLogo} className='imgRepo' />
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 my-4'>
                    <div className='text-center fs-4 title-custom'>
                        <p>Just Another Note Taker</p>
                    </div>
                    <a href="https://just-another-note-taker-cwd-fa89b7859e8d.herokuapp.com/" target="_blank">
                        <img src={Jate} className='imgEl' />
                    </a>
                    <div className='text-center mt-2'>
                        <a href='https://github.com/ChrisDeHaan/PWA-Text-Editor' target='_blank'>
                            <img src={GithubLogo} className='imgRepo' />
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 my-4'>
                    <div className='text-center fs-4 title-custom'>
                        <p>Better Weather</p>
                    </div>
                    <a href="https://chrisdehaan.github.io/Weather-App/" target="_blank">
                        <img src={WeatherApp} className='imgEl' />
                    </a>
                    <div className='text-center mt-2'>
                        <a href='https://github.com/ChrisDeHaan/Weather-App' target='_blank'>
                            <img src={GithubLogo} className='imgRepo' />
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 my-4'>
                    <div className='text-center fs-4 title-custom'>
                        <p>Random Password Generator</p>
                    </div>
                    <a href="https://chrisdehaan.github.io/Password-Generator/" target="_blank">
                        <img src={PasswordGen} className='imgEl' />
                    </a>
                    <div className='text-center mt-2'>
                        <a href='https://github.com/ChrisDeHaan/Password-Generator' target='_blank'>
                            <img src={GithubLogo} className='imgRepo' />
                        </a>
                    </div>
                </div>
                <div className='col-12 col-md-6 my-4'>
                    <div className='text-center fs-4 title-custom'>
                        <p>Coding Quiz</p>
                    </div>
                    <a href="https://chrisdehaan.github.io/Timed-Quiz/" target="_blank">
                        <img src={QuizApp} className='imgEl' />
                    </a>
                    <div className='text-center mt-2'>
                        <a href='https://github.com/ChrisDeHaan/Timed-Quiz' target='_blank'>
                            <img src={GithubLogo} className='imgRepo' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}