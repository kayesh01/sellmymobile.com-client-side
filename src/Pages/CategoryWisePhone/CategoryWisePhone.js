import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';
import Phone from './Phone';

const CategoryWisePhone = () => {
    const phones = useLoaderData();
    const [bookPhone, setBookPhone] = useState([]);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-4'>
            {
                phones.map(phone => <Phone
                    key={phone._id}
                    phone={phone}
                    setBookPhone={setBookPhone}
                ></Phone>)
            }
            {bookPhone && <BookingModal
                bookPhone={bookPhone}
            ></BookingModal>}
        </div>
    );
};

export default CategoryWisePhone;