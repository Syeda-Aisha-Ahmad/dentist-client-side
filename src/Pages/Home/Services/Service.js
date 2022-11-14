import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl py-10 mt-10">
            <figure><img src={img} alt={img} /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className='text-lg'>{description}</p>
            </div>
        </div>
    );
};

export default Service;