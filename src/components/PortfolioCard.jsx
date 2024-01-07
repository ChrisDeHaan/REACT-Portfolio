import GithubLogo from '../assets/github-mark.png'

export default function PortfolioCard({ title, websiteLink, websiteImage, githubLink, text }) {
    return (
        <div className='col-12 my-4 row mx-auto align-items-center'>
            <div className='col-md-6 col-12 my-2'>
                <div className='text-center fs-3 title-custom fw-bold'>
                    <p>{title}</p>
                </div>
                <p>{text}</p>
                <div className='text-center mt-2'>
                    <a href={githubLink} target='_blank'>
                        <img src={GithubLogo} className='imgRepo' />
                    </a>
                </div>
            </div>
            <div className='col-md-6 col-12 my-2'>
                <a href={websiteLink} target="_blank">
                    <img src={websiteImage} className='imgEl' />
                </a>
            </div>
        </div>
    )
}