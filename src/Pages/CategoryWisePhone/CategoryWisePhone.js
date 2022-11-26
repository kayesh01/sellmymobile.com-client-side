import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Phone from './Phone';

const CategoryWisePhone = () => {
    const phones = useLoaderData();
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-4'>
            {
                phones.map(phone => <Phone
                    key={phone._id}
                    phone={phone}
                ></Phone>)
            }
        </div>
    );
};

export default CategoryWisePhone;