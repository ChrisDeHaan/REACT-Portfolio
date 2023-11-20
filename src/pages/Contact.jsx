import './Contact.css'

export default function Contact() {
    return (
        <div>
            <h1 className="display-6 text-center m-4 title-custom">Contact Me</h1>
            <form className='col-10 mx-auto'>
                <div className="col-12 col-md-7 mx-auto my-3">
                    <label className='form-label col-3 fs-5 title-custom'>Name:</label>
                    <input type='text' className='form-control form-custom' />
                </div>
                <div className="col-12 col-md-7 mx-auto my-3 fs-5 title-custom">
                    <label className='form-label col-3'>Email:</label>
                    <input type='text' className='form-control form-custom' />
                </div>
                <div className="col-12 col-md-7 mx-auto my-3 fs-5 title-custom">
                    <label className='form-label col-3'>Message:</label>
                    <textarea type='text' className='form-control form-custom' rows='5' />
                </div>
                <div className='col-12 col-md-7 mx-auto text-center mb-5'>
                    <button className="btn btn-custom ">Submit</button>
                </div>
            </form>
        </div>
    )
}