"use client"

import { createNote } from '@/util/databaseFunctions';
import React, { useState } from 'react';

const DashboardPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        await createNote(title, content, description)
    };

    return (
        <div className='px-8'>
            <h1 className='text-4xl font-bold'>Dashboard</h1>
            <form onSubmit={handleSubmit} className='pt-4'>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="title">Title:</label>
                    <input className='rounded text-black p-2' type="text" id="title" value={title} onChange={handleTitleChange} />
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="description">Description:</label>
                    <textarea className='rounded text-black p-2' type="text" id="description" value={description} onChange={handleDescriptionChange} />
                </div>
                <div className='flex flex-col mt-4'>
                    <label htmlFor="content">Content:</label>
                    <textarea className='rounded text-black p-2' id="content" value={content} onChange={handleContentChange} />
                </div>
                <button type="submit" className='bg-white p-3 px-4 text-black hover:font-bold rounded-md mt-4'>Add Note</button>
            </form>
        </div>
    );
};

export default DashboardPage;