import React from 'react';
import treatment from '../../../assets/images/treatment.png'

const About = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={treatment} className="lg:w-3/4" alt="treatment" /></figure>
            <div className="card-body lg:w-1/2 pt-48"><h2 className="card-title text-5xl font-bolds">Exceptional Dental
                <br /> Care, on Your Terms</h2>
                <p className='text-lg'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>

                </div>
            </div>
        </div >
    );
};

export default About;