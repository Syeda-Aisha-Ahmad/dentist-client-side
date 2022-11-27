import React from 'react';
import './style.css'

const AppointmentOption = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div className="card w-full border shadow-style ">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl text-primary">{name}</h2>
                <p className='text-lg font-semibold'>
                    {slots.length > 0 ? slots[0] : 'Try Another Day'}
                </p>
                <p className='text-lg'>
                    {slots.length > 0 ? `${slots.length} spaces available` : `${slots.length} space available`}
                </p>
                <div className="card-actions ">
                    {/* The button to open modal */}
                    <label disabled={slots.length === 0} onClick={() => setTreatment(appointment)} htmlFor="booking-modal" className="btn btn-primary text-white">Book Appointmentopen</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;