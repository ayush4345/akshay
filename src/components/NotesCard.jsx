import React from 'react';

const NotesCard = ({ title, description }) => {
    return (
        <div className='flex flex-col gap-3 mt-8'>
            <div className='text-2xl font-medium'>{title}</div>
            <div className='text-lg font-light'>{description}</div>
        </div>
    );
};

export default NotesCard;