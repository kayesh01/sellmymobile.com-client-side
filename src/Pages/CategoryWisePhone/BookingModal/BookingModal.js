import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bookPhone }) => {
    const { name, resalePrice } = bookPhone
    const { user } = useContext(AuthContext);
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking for : {name}</h3>
                    <form className='grid grid-cols-1 gap-4 mt-7'>
                        <span className="label-text">You email</span>
                        <input type="text" value={user.email} readOnly className="input input-bordered w-full" />
                        <span className="label-text">Product Price</span>
                        <input type="text" value={resalePrice} readOnly className="input input-bordered w-full" />
                        <span className="label-text">Your Phonenumber.</span>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <span className="label-text">Meeting Location.</span>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" className='w-full btn' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;