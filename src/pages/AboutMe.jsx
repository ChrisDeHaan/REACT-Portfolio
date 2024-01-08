import pfp from '../assets/beach.jpg'
import '../assets/caldera.jpg'

export default function Home() {
    return (
        <div>
            <div className='mx-auto pfp-div text-center align-items-center'>
                <img src={pfp} className='img-fluid pfp' />
            </div>
            <div className='col-10 mx-auto'>
                <h1 className="display-6 text-center m-4 header-cstm fw-bold">About Me</h1>
                <p className='fs-5'>My name is Chris and I'm a burgeoning Full-Stack Web Developer. I recently completed a coding
                    bootcamp
                    through UCF, focused on MongoDB, Express, Node, and React, with the ambition of accelerating my career growth. I have a Bachelor's Degree in
                    Criminology from Florida State University but am in the process of transitioning my career into tech
                    as
                    it's something I am passionate about. My current employment as a QA tester has me working with
                    various
                    websites and applications and has allowed me to get hands on experience with Agile software
                    development as well as familiarity with multiple different applications designed to track team efforts such as
                    Jira, Confluence, Notion, Linear, Clickup, Asana, and more.</p>
                <p className="fs-5">I'm a very driven and motivated worker that brings a friendly charm to whatever environment I'm in. I
                    currently live in Orlando, FL, but am willing to relocate! When I'm not working, you can find me
                    playing
                    with my dog, gaming with friends, on my motorcycle, camping, or hiking!</p>
            </div>
        </div>
    )
}