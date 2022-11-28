import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddPhone = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const handleAddDoctor = data => {
        console.log(data);
        const savePhone = {
            id: data.id,
            name: data.name,
            location: data.location,
            img: data.img,
            resalePrice: data.resalePrice,
            originalPrice: data.originalPrice
        }
        fetch('http://localhost:5000/savephones', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(savePhone)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.name} is added successfully.`);
                navigate('/dashboard/myphone')
            })
    }
    return (
        <div>
            <h2 className="text-3xl">Add a phone.</h2>
            <div className='w-96 p-7'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Phone Name</span></label>
                        <input type="text" {...register('name',
                            { required: "Name is required." }
                        )} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Location</span></label>
                        <input type="text" {...register('location', {
                            required: "location is required."
                        })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <select {...register('id', {
                        required: 'You must select your account type.'
                    })} className='w-full my-2 input input-bordered'>
                        <option value="">Select brand</option>
                        <option value="01">APPLE</option>
                        <option value="02">SAMSUNG</option>
                        <option value="03">ONE PLUS</option>
                    </select>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Image Link</span></label>
                        <input type="text" {...register('img', {
                            required: "Image is required."
                        })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Resale Price</span></label>
                        <input type="text" {...register('resalePrice', {
                            required: "Resale Price is required."
                        })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Original Price</span></label>
                        <input type="text" {...register('originalPrice', {
                            required: "originalPrice is required."
                        })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Years Of Use</span></label>
                        <input type="text" {...register('YearsOfUse', {
                            required: "YearsOfUse is required."
                        })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn btn-accent w-full my-2' value='ADD TO LIST' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddPhone;