import PortfolioCard from '../components/PortfolioCard'

import NasaSite from '../assets/NASA-API.png'
import HealthcareSite from '../assets/project-2.png'
import WeatherApp from '../assets/weather-app.png'
import ProgramonPalace from '../assets/programon-palace.png'

export default function Portfolio() {
    const data = [
        {
            id: 0,
            title: 'Prográmon Palace',
            websiteLink: 'https://programon-palace-c417e58495b0.herokuapp.com/',
            websiteImage: ProgramonPalace,
            githubLink: 'https://github.com/Bunde20/Team-SCCRM-3',
            text: 'Prográmon Palace is a MERN stack application that is heavily inspired by card games like Pokémon and Magic: The Gathering. Users can trade cards between themselves, purchase cards from the marketplace, and use those cards against bosses when venturing into the Palace. Tap the image to try it out! This application utilizes Mongo, Express, Node, React, Bootstrap, HTML, CSS, Javascript, animate.css, Fontawesome, bcrypt.js, Axios, JWT, and MidJourney.'
        },
        {
            id: 1,
            title: 'NASA APIs',
            websiteLink: 'https://chrisdehaan.github.io/Team-SCCRM/',
            websiteImage: NasaSite,
            githubLink: 'https://github.com/ChrisDeHaan/Team-SCCRM',
            text: 'A Front End application that uses the popular Astronomy Picture of the Day and Mars Rover NASA APIs. It was designed to provide an easy and convenient way to look through, find, and save your favorite APOD images or rover images. Tap the image to explore stunning images captured in, or related to, space. It utilizes HTML, CSS, Javascript, Boostrap, MidJourney, and DayJS.'
        },
        {
            id: 2,
            title: 'Doctor Portal',
            websiteLink: 'https://sccrm-healthcare-bbafb87ca81b.herokuapp.com/',
            websiteImage: HealthcareSite,
            githubLink: 'https://github.com/Elrond-Hubbard/Team-SCCRM-2',
            text: "This is a web application for remotely managing and monitoring hospital patient vital signs. This system uses a MySQL database, Express server, and Socket.io for real-time communication on the frontend. The app provides secure and efficient means to store and view patients' health information, making it a valuable tool for healthcare professionals and institutions."
        },
        {
            id: 3,
            title: 'Better Weather',
            websiteLink: 'https://chrisdehaan.github.io/Weather-App/',
            websiteImage: WeatherApp,
            githubLink: 'https://github.com/ChrisDeHaan/Weather-App',
            text: "A simple Front End weather application that utilizes OpenWeather's free API in order to display the current weather as well as a 5 day forecast for searched locations. It saves the 5 most recent search locations for convenience. It utilizes Bootstrap, Javascript, HTML, and the OpenWeather API."
        }
    ]

    return (
        <>
            <h1 className="display-6 text-center m-4 title-custom fw-bold">My Portfolio</h1>

            <div className='col-11 row mx-auto max-w'>
                {data.map(obj => <PortfolioCard {...obj} key={obj.id}/>)}
            </div>
        </>
    )
}