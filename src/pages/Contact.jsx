import { useState } from 'react'

import './Contact.css'

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function getElId (element, message) {document.getElementById(element).textContent=message}
    function getInputId (element, message) {document.getElementById(element).value=message}
    function clearFields () {
        getElId('nameEl', '')
        getElId('emailEl', '')
        getElId('messageEl', '')
        getElId('submissionEl', '')
    }

    const formValidation = () => {
        clearFields()
        if (name === '') {getElId('nameEl', 'Name is required. I need some way to address you!')}
        if (email === '') {getElId('emailEl', 'Email is required. How can I contact you back?')}
        if (message === '') {getElId('messageEl', 'Message is required.')}
        if (!(name === '') && !(email === '') && !(message === '')) {
            setName('')
            setEmail('')
            setMessage('')
            getInputId('nameInput', '')
            getInputId('emailInput', '')
            getInputId('messageInput', '')
            getElId('submissionEl', "Thanks for your submission. I'll get back to you as soon as possible!")
        } else {
            return
        }

    }

    return (
        <div>
            <h1 className="display-6 text-center m-4 title-custom">Contact Me</h1>
            <div className='text-center fs-5' id='submissionEl'></div>
            <form className='col-10 mx-auto'>
                <div className="col-12 col-md-7 mx-auto my-3">
                    <label className='form-label col-3 fs-4 title-custom'>Name:</label>
                    <input type='text' className='form-control form-custom' onChange={(e) => setName(e.target.value)} id='nameInput'/>
                    <div className='fs-6 m-2 text-danger' id='nameEl'></div>
                </div>
                <div className="col-12 col-md-7 mx-auto my-3 fs-4 title-custom">
                    <label className='form-label col-3'>Email:</label>
                    <input type='email' className='form-control form-custom' onChange={(e) => setEmail(e.target.value)} id='emailInput'/>
                    <div className='fs-6 m-2 text-danger' id='emailEl'></div>
                </div>
                <div className="col-12 col-md-7 mx-auto my-3 fs-4 title-custom">
                    <label className='form-label col-3'>Message:</label>
                    <textarea type='text' className='form-control form-custom' rows='5' onChange={(e) => setMessage(e.target.value)} id='messageInput'/>
                    <div className='fs-6 m-2 text-danger' id='messageEl'></div>
                </div>
            </form>
            <div className='col-12 col-md-7 mx-auto text-center mb-5'>
                <button className="btn btn-custom" id='btnEl' onClick={formValidation}>Submit</button>
            </div>
        </div>
    )
}