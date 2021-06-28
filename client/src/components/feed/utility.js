import axios from "axios";

export const fetchTimelinePost = async (userId) => {
    const response = await axios.get(
        `http://localhost:8000/api/posts/timeline/${userId}`
    );

    return response;
};
