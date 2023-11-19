import GithubLogo from '../assets/github-mark.png'
import LinkedInLogo from '../assets/linkedin_black_logo_icon.png'

import './Footer.css'

function Footer() {
    return (
        <div className='row my-2 mx-auto col-6 footerDiv'>
            <div className='col-6 text-end'>
                <a href='https://github.com/ChrisDeHaan' target='_blank'>
                    <img src={GithubLogo} className='footerLogo' />
                </a>
            </div>
            <div className='col-6 text-start'>
                <a href='https://www.linkedin.com/in/christopher-dehaan-b60a68117/' target='_blank'>
                    <img src={LinkedInLogo} className='footerLogo' />
                </a>
            </div>
        </div>
    )
}

export default Footer