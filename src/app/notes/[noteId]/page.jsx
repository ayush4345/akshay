import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { data } from '../page';
import { getNoteDataBySlug } from '@/util/databaseFunctions';

const NotesPage = async({ params }) => {
    console.log(params.noteId)

    const noteData = await getNoteDataBySlug(params.noteId)
    console.log(noteData)

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
        <main className='m-auto w-full max-w-[720px] flex flex-col px-3'>
            <div>
                <div className='text-4xl text-white font-semibold text-left mb-8 py-3 sticky top-0 bg-[#121212]'>
                    {noteData["response"][0].title}
                </div>
                <Markdown className='prose prose-headings:text-white prose-p:text-white prose-blockquote:text-white prose-a:text-white prose-strong:text-white prose-li:text-white prose-pre:text-white' remarkPlugins={[remarkGfm]}>{noteData["response"][0].description}</Markdown>
            </div>
        </main>
    );
};

export default NotesPage;