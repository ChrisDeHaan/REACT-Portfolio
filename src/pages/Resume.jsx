export default function Resume() {
    return (
        <div className="mx-auto max-w">
            <h1 className="display-6 text-center m-4 title-custom">Resume</h1>
            <div className="col-10 mx-auto mb-5 title-custom">
                <div className="mb-5 text-center">
                    <button className="btn btn-custom"><a href='https://docdro.id/O8GKw4Q' target='_blank' className='link'>Download Resume Here</a></button>
                </div>
                <h2>Front-End Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                </ul>
                <h3>Back-End Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    )
}