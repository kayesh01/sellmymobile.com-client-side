import React from 'react';

const Phone = ({ phone, setBookPhone }) => {
    const { _id, name, location, resalePrice, originalPrice, YearsOfUse, img, verified, postedTime, sellerName } = phone;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-52" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Phone name:{name}</h2>
                <div className='flex flex-row gap-2'>
                    <p>Seller Name: {sellerName}</p>
                    {
                        verified && <div className="badge badge-accent">Verified</div>
                    }
                </div>
                <small className='text-accent-800'>Posted Date: {postedTime}</small>
                <small className='text-pink-800'>Original price: {originalPrice}</small>
                <small className='text-green-600'>Resale price: {resalePrice}</small>
                <small>Years Of use: {YearsOfUse}</small>
                <p>Location: {location}</p>

                <div className="card-actions">
                    <label onClick={() => setBookPhone(phone)} htmlFor="booking-modal" className="btn btn-primary">Buy Now</label>
                </div>
            </div>
        </div>
    );
};

export default Phone;