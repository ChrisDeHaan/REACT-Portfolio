import GithubLogo from '../assets/github-mark.png'

export default function PortfolioCard({title, websiteLink, websiteImage, githubLink}) {
    return (
        <div className='col-12 col-md-6 my-4'>
            <div className='text-center fs-4 title-custom'>
                <p>{title}</p>
            </div>
            <a href={websiteLink} target="_blank">
                <img src={websiteImage} className='imgEl' />
            </a>
            <div className='text-center mt-2'>
                <a href={githubLink} target='_blank'>
                    <img src={GithubLogo} className='imgRepo' />
                </a>
            </div>
        </div>
    )
}