import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const infos = [
        {
            id: 1,
            icon: clock,
            description: 'Open 9.00 am to 5.00 pm everyday',
            name: 'Opening Hours',
            bgClass: 'bg-primary'
        },
        {
            id: 2,
            icon: marker,
            description: 'Open 9.00 am to 5.00 pm everyday',
            name: 'Opening Hours',
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            icon: phone,
            description: 'Open 9.00 am to 5.00 pm everyday',
            name: 'Opening Hours',
            bgClass: 'bg-primary'
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                infos.map(info => <InfoCard
                    key={info.id}
                    info={info}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;