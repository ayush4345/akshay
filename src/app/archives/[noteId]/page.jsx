import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getNoteDataBySlug } from '@/util/databaseFunctions';

// Add this function to generate metadata
export async function generateMetadata({ params }) {
    const noteData = await getNoteDataBySlug(params.noteId);
    const title = noteData["response"][0].title;
    const description = noteData["response"][0].description.substring(0, 200) + '...';

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            type: 'article',
        },
    };
}

const NotesPage = async ({ params }) => {

    const noteData = await getNoteDataBySlug(params.noteId)

    return (
        <main className='m-auto w-full max-w-[720px] flex flex-col px-5 mb-10'>
            <div>
                <div className='text-3xl md:text-4xl text-white font-semibold text-left mb-8 py-3 bg-[#121212]'>
                    {noteData["response"][0].title}
                </div>
                <Markdown className='prose max-w-none prose-headings:text-white prose-p:text-white prose-blockquote:text-white prose-a:text-white prose-strong:text-white prose-li:text-white prose-pre:text-white' remarkPlugins={[remarkGfm]}>{noteData["response"][0].content}</Markdown>
            </div>
        </main>
    );
};

export default NotesPage;