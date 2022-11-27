import React, { useState } from 'react';
import ApponmentBanner from '../AppoinmentBanner/ApponmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appoinment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <ApponmentBanner
                selected={selected}
                setSelected={setSelected}
            ></ApponmentBanner>

            <AvailableAppointment
                selected={selected}
            ></AvailableAppointment>
        </div>
    );
};

export default Appoinment;