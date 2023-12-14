import PortfolioCard from '../components/PortfolioCard'

import NasaSite from '../assets/NASA-API.png'
import HealthcareSite from '../assets/project-2.png'
import Jate from '../assets/JATE.png'
import WeatherApp from '../assets/weather-app.png'
import PasswordGen from '../assets/password-generator.png'
import ProgramonPalace from '../assets/programon-palace.png'

export default function Portfolio() {
    const data = [
        {
            title: 'Prográmon Palace',
            websiteLink: 'https://programon-palace-c417e58495b0.herokuapp.com/',
            websiteImage: ProgramonPalace,
            githubLink: 'https://github.com/Bunde20/Team-SCCRM-3'
        },
        {
            title: 'NASA APIs',
            websiteLink: 'https://chrisdehaan.github.io/Team-SCCRM/',
            websiteImage: NasaSite,
            githubLink: 'https://github.com/ChrisDeHaan/Team-SCCRM'
        },
        {
            title: 'Doctor Portal',
            websiteLink: 'https://sccrm-healthcare-bbafb87ca81b.herokuapp.com/',
            websiteImage: HealthcareSite,
            githubLink: 'https://github.com/Elrond-Hubbard/Team-SCCRM-2'
        },
        {
            title: 'Just Another Note Taker',
            websiteLink: 'https://just-another-note-taker-cwd-fa89b7859e8d.herokuapp.com/',
            websiteImage: Jate,
            githubLink: 'https://github.com/ChrisDeHaan/PWA-Text-Editor'
        }, 
        {
            title: 'Better Weather',
            websiteLink: 'https://chrisdehaan.github.io/Weather-App/',
            websiteImage: WeatherApp,
            githubLink: 'https://github.com/ChrisDeHaan/Weather-App'
        }, 
        {
            title: 'Random Password Generator',
            websiteLink: 'https://chrisdehaan.github.io/Password-Generator/',
            websiteImage: PasswordGen,
            githubLink: 'https://github.com/ChrisDeHaan/Password-Generator'
        }, 
    ]

    return (
        <>
            <h1 className="display-6 text-center m-4 title-custom">My Portfolio</h1>

            <div className='row col-10 mx-auto'>
                {data.map(obj => <PortfolioCard {...obj}/>)}
            </div>
        </>
    )
}