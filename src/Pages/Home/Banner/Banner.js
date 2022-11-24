import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../assets/images/banner.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-100">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={banner} className="w-[700px]  rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold"><span className='text-sky-400'>Giving New Life</span> to used Smartphones.</h1>
                    <p className="py-6 font-bold">Welcome to the safest marketplace for resale phone.<span className='text-orange-500'> The price you see is the price you get.</span> A simple way to sell your device.</p>
                    <Link to='/login'><button className="btn btn-primary">Register for free.</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;