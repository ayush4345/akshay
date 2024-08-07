import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { data } from '../page';

const NotesPage = ({ params }) => {
    console.log(params.noteId)

    const markdown = `Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.


### Two up the Circle

Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.Anyone who’s spent some time working as product manager, especially


Those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.
Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.Anyone who’s spent some time working as product manager, especially


Those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.
Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.Anyone who’s spent some time working as product manager, especially


Those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.
Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.Anyone who’s spent some time working as product manager, especially


Those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.Anyone who’s spent some time working as product manager, especially those who have moved around a bit, knows that the function can be vastly different depending on the product, the team, and the company they’re at.

`

    return (
        <main className='w-full flex flex-col items-center px-3'>
            <div>
                <div className='text-4xl font-semibold text-left mb-8 py-3 sticky top-0 bg-[#121212]'>
                    {data[0].title}
                </div>
                <Markdown className='prose w-full max-w-[720px] prose-headings:text-white prose-p:text-white prose-blockquote:text-white prose-a:text-white prose-strong:text-white prose-li:text-white prose-pre:text-white' remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </div>
        </main>
    );
};

export default NotesPage;