import Link from 'next/link';
import React from 'react';

const NotesCard = ({ title, description, slug, publishedOn, readingTime }) => {

    const date = new Date(publishedOn);
    const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, ' ');

    return (
        <Link href={`/archives/${slug}`}>
            <div className='flex flex-col gap-3 mt-8'>
                <div className='text-sm text-white/85 flex items-center gap-2'>{formattedDate}<div className='w-1 h-1 rounded-full bg-white/85'/>{readingTime} min read</div>
                <div className='text-2xl font-medium text-white'>{title}</div>
                <div className='text-lg font-light text-white line-clamp-4'>{description}</div>
            </div>
        </Link>

    );
};

export default NotesCard;