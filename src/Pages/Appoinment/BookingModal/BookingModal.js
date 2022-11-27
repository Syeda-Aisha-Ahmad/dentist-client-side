import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selected, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selected, 'PP');
    const { user } = useContext(AuthContext);

    const formHandler = event => {
        event.preventDefault();
        const form = event.target;
        const day = form.day.value;
        const time = form.time.value;
        const fname = form.fname.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: day,
            treatment: name,
            patient: fname,
            time,
            email,
            phone
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTreatment(null);
                refetch();
            })

        console.log(booking)
    }
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-primary mb-10">{name}</h3>
                    <form onSubmit={formHandler}>
                        <input name='day' type="text" disabled value={date} className="input input-bordered w-full mb-5" />



                        <input name='fname' type="text" disabled defaultValue={user?.displayName} placeholder="Full Name" className="input input-bordered w-full mb-5" />

                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full mb-5" />

                        <select name='time' className="select select-bordered w-full mb-5">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered w-full mb-5" />


                        <input className='btn btn-primary w-full mt-5' type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;