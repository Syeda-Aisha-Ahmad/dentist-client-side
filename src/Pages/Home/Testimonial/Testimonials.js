import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg'
import Testimonial from './Testimonial';

const Testimonials = () => {

    const testimonialDatas = [
        {
            id: 1,
            name: "Winson Harry",
            place: "California",
            image: people1,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 2,
            name: "Winson Harry",
            place: "California",
            image: people2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 3,
            name: "Winson Harry",
            place: "California",
            image: people3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },

    ]
    return (
        <div className='mt-32 mb-20'>
            <div className='flex justify-between mb-20'>
                <div>
                    <h4 className="text-2xl font-bold text-primary mb-5">Appointment</h4>
                    <h2 className="text-4xl font-bold mb-10">Make an appointment Today</h2>
                </div>
                <img src={quote} alt="" className='w-48' />
            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    testimonialDatas.map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;