import React from 'react';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import bg from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='py-20' style={{
            background: `url(${bg})`
        }}>
            <div className='text-center'>
                <h4 className="text-2xl font-bold text-primary mb-5">Contact Us</h4>
                <h2 className="text-4xl font-bold mb-10 text-white">Make an appointment Today</h2>
            </div>
            <div className="card-body lg:w-1/2 mx-auto">
                <div className="form-control mb-2">
                    <input type="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control mb-2">
                    <input type="text" placeholder="Subject" className="input input-bordered" />
                </div>
                <div className="form-control mb-2">
                    <textarea className="textarea" placeholder="Your message..."></textarea>
                </div>
                <div className="form-control mt-6 lg:w-1/4 mx-auto">
                    <PrimaryButton>Log In</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Contact;