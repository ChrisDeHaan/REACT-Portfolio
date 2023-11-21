import { useState } from 'react'

export default function Contact() {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: ''
    })

    function getElId(element, message) { document.getElementById(element).textContent = message }
    function getInputId(element, message) { document.getElementById(element).value = message }
    function clearFields() {
        getElId('nameEl', '')
        getElId('emailEl', '')
        getElId('messageEl', '')
        getElId('submissionEl', '')
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const validateForm = (e) => {
        e.preventDefault();
        clearFields();
        if (contactInfo.name === '') { getElId('nameEl', 'Name is required. I need some way to address you!') }
        if (contactInfo.email === '') { getElId('emailEl', 'Email is required. How can I contact you back?') }
        if (contactInfo.message === '') { getElId('messageEl', 'Message is required.') }
        if (!(contactInfo.name === '') && !(contactInfo.email === '') && !(contactInfo.message === '')) {
            getInputId('nameInput', '')
            getInputId('emailInput', '')
            getInputId('messageInput', '')
            getElId('submissionEl', "Thanks for your submission. I'll get back to you as soon as possible!")
        }
    }

    const handleBlur = (e) => {
        if (e.target.name == "email") {
            if (validateEmail(e.target.value) === null) {
                getElId('emailEl', 'A valid email is required. How can I contact you back?')
            }
        } else if (!e.target.value.length) {
            if (e.target.name === "name") {
                getElId('nameEl', 'Name is required. I need some way to address you!')
            }
            if (e.target.name === "message") {
                getElId('messageEl', 'Message is required.')
            }
        }
    }

    const handleChange = (e) => {
        setContactInfo({
            ...contactInfo,
            [e.target.name]: e.target.value
        })
        if ((e.target.name === 'name')) {
            if (!e.target.value.length) {
                return
            } else { getElId('nameEl', '') }
        }
        if ((e.target.name === 'email')) {
            if (!e.target.value.length) {
                return
            } else { getElId('emailEl', '') }
        }
        if ((e.target.name === 'message')) {
            if (!e.target.value.length) {
                return
            } else { getElId('messageEl', '') }
        }
    }

    return (
        <div>
            <h1 className="display-6 text-center m-4 title-custom">Contact Me</h1>
            <div className='text-center fs-5' id='submissionEl'></div>
            <form className='col-10 mx-auto' onSubmit={validateForm}>
                <div className="col-12 col-md-7 mx-auto my-3">
                    <label className='form-label col-3 fs-4 title-custom'>Name:</label>
                    <input type='text' className='form-control form-custom' onBlur={handleBlur} onChange={handleChange} id='nameInput' name='name' />
                    <div className='fs-6 m-2 text-danger' id='nameEl'></div>
                </div>
                <div className="col-12 col-md-7 mx-auto my-3 fs-4 title-custom">
                    <label className='form-label col-3'>Email:</label>
                    <input type='email' className='form-control form-custom' onBlur={handleBlur} onChange={handleChange} id='emailInput' name="email" />
                    <div className='fs-6 m-2 text-danger' id='emailEl'></div>
                </div>
                <div className="col-12 col-md-7 mx-auto my-3 fs-4 title-custom">
                    <label className='form-label col-3'>Message:</label>
                    <textarea type='text' className='form-control form-custom' rows='5' onBlur={handleBlur} onChange={handleChange} id='messageInput' name="message" />
                    <div className='fs-6 m-2 text-danger' id='messageEl'></div>
                </div>
                <div className='col-12 col-md-7 mx-auto text-center mb-5'>
                    <button className="btn btn-custom" id='btnEl' >Submit</button>
                </div>
            </form>

        </div>
    )
}