import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bookPhone, setBookPhone }) => {
    const { name, resalePrice } = bookPhone
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const user = form.user.value;
        const image = form.img.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        // console.log(email, price, phone, location);

        const booking = {
            bookPhone: name,
            buyerName: user,
            phoneImg: image,
            email,
            phone,
            price,
            meetingLocation: location,
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setBookPhone(null);
                    toast.success('You Booked this Phone Successfully.')
                }
            })

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-7'>
                        {/* <img name='img' src={bookPhone.img} alt="" className='h-30 w-40' /> */}
                        <input type="text" name="img" id="" disabled className='display hidden' value={bookPhone.img} />
                        <span className="label-text">You Name</span>
                        <input name='user' type="text" defaultValue={user?.displayName} disabled className="input input-bordered w-full" />
                        <span className="label-text">You email</span>
                        <input name='email' type="email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        <span className="label-text">Product Price</span>
                        <input name='price' type="text" value={resalePrice} disabled className="input input-bordered w-full" />
                        <span className="label-text">Your Phonenumber.</span>
                        <input name='phone' type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <span className="label-text">Meeting Location.</span>
                        <input name='location' type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <br />
                        <input type="submit" className='w-full btn' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;