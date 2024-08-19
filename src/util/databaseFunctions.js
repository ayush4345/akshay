import axios from "axios";

export const getUserData = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/get_notes');
        const data = response.data;
        return data;
    } catch (error) {
        console.error('Error getting user data:', error);
        return error;
    }
};

export const createPokerGame = async (title, content, description) => {
    try {
        const response = await axios.post('http://localhost:3000/api/create-game', {
            title: title,
            content: content,
            description: description,
        });
        const data = response.data;
        if (!data?.success) {
            throw new Error('Error creating note. API response is not successful.');
        }
        return true;
    } catch (error) {
        console.error('Error creating note', error);
        throw error;
    }
};