import axios from "axios";

export const getNotesData = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_URL}/api/get_notes`);
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error getting user data:', error);
        return error;
    }
};

export const getNoteDataBySlug = async (slug) => {
    try {
        console.log(slug)
        const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/get_note`,{slug: slug});
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error getting user data:', error);
        return error;
    }
};

export const createNote = async (title, content, description, slug, password) => {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/add_note`, {
            title: title,
            content: content,
            description: description,
            slug: slug,
            password: password
        });
        const data = response.data;
        console.log(data)
        if (!data?.success) {
            throw new Error('Error creating note. API response is not successful.');
        }
        return true;
    } catch (error) {
        console.error('Error creating note', error);
        throw error;
    }
};