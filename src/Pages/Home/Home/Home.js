import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import InfoCards from '../InfoCard/InfoCards';
import MakeAppoinment from '../MakeAppinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonial/Testimonials';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <About></About>
            <MakeAppoinment></MakeAppoinment>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;