import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyPhones = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const [success, setSuccess] = useState('')
    const { data: savephones, } = useQuery({
        queryKey: ['savephones'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/savephones/${email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    const handlePost = phone => {
        console.log(phone);
        fetch('http://localhost:5000/postphone', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(phone)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setSuccess(result);
            })
    }
    return (
        <div>
            <h2 className="text-3xl">My Phones: {savephones?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>IMG</th>
                            <th>Original Price</th>
                            <th>ressale Price</th>
                            <th>Years Of Use.</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            savephones?.map((phone, i) => <tr key={phone._id}>
                                <th>{i + 1}</th>
                                <td>{phone.name}</td>
                                <td>{phone.location}</td>
                                <td><div className="mask mask-squircle w-12 h-12">
                                    <img src={phone?.img} alt="" />
                                </div></td>
                                <td>{phone.originalPrice}</td>
                                <td>{phone.resalePrice}</td>
                                <td>{phone.YearsOfUse}</td>

                                <td>
                                    {
                                        !success.acknowledged &&
                                        <button onClick={() => handlePost(phone)} className='btn btn-xs btn-outline'>POST</button>

                                    }
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPhones;