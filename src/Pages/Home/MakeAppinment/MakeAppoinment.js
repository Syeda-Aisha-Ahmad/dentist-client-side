import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`,
                color: 'white'
            }}
        >
            <div className="card lg:card-side shadow-xl flex items-center mt-64">
                <img className='lg:w-1/2 lg:-mt-32 hidden lg:block' src={doctor} alt="Album" />
                <div className="card-body lg:w-1/2 pt-40 pr-10">
                    <h4 className="text-2xl font-bold text-primary">Appointment</h4>
                    <h2 className="text-4xl font-bold">Make an appointment Today</h2>
                    <p className='text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <div className="card-actions justify-end">
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default MakeAppoinment;