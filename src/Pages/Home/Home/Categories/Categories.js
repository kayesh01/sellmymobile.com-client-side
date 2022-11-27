import React, { useEffect, useState } from 'react';
import Category from './Category';


const Categories = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/brands')
            .then(res => res.json())
            .then(data => {
                setBrands(data)
                console.log(data)
            })
    }, [])

    return (
        <div className='mt-3'>
            <div>
                <h2 className='text-2xl text-center uppercase'>A simple way to sell and buy your phone.</h2>
                <h2 className='text-3xl text-orange-500 text-center'>Our Phone Caategories by Brand.</h2>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
                {
                    brands?.map(brand => <Category
                        key={brand.id}
                        brand={brand}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;