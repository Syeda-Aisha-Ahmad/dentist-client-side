import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, image, place, description } = testimonial;
    return (
        <div className="card w-full border">
            <div className="card-body items-center text-lg">
                <p>{description}</p>
                <div className="card-actions grid gap-32 grid-cols-2 mt-5">
                    <img src={image} className="border border-primary rounded-full p-1" alt="" />
                    <div className='pt-3'>
                        <p className='font-bold'>{name}</p>
                        <p>{place}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;