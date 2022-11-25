import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'We have buyers always.',
            description: 'We are open for 24/7',
            icon: clock,
            bgClass: 'bg-slate-500'
        },
        {
            id: 2,
            name: 'Our service is all over the country',
            description: 'To all district to our countries.',
            icon: marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact Us Now',
            description: '01890310111',
            icon: phone,
            bgClass: 'bg-yellow-600'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;