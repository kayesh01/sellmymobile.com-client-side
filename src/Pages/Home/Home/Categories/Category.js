import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ brand }) => {
    const { name, img, description, id } = brand;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-60" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <Link to={`/brands/${id}`}><button className="btn btn-primary">See all phones</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;