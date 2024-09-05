export const fetchContent = async (currentPath: string) => {
    try {
        const url = `${import.meta.env.VITE_CONTENT_URL}/${currentPath}.json`;
        const response = await fetch(url);
       
        if (!response.ok) {
            throw new Error('No content found');
        }
        return await response.json();

    } catch (error) {
        console.error('There was a problem:', error);
        throw error;
    }
}