import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const ApponmentBanner = ({ selected, setSelected }) => {

    return (
        <div>
            <div className="hero mt-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" alt='banner-img' />
                    <div className='mr-48'>
                        <DayPicker
                            mode="single"
                            selected={selected}
                            onSelect={setSelected}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApponmentBanner;