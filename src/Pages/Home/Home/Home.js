import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../Infocards/InfoCards';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Categories></Categories>
        </div>
    );
};

export default Home;