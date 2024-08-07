import Link from 'next/link';
import React from 'react';

const NotesCard = ({ title, description, slug }) => {
    return (
        <Link href={`/notes/${slug}`}>
            <div className='flex flex-col gap-3 mt-8'>
                <div className='text-2xl font-medium'>{title}</div>
                <div className='text-lg font-light'>{description}</div>
            </div>
        </Link>

    );
};

export default NotesCard;