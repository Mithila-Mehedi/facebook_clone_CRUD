import axios from "axios";

export const createPost = async (data) => {
    var config = {
        method: "post",
        url: "http://localhost:8000/api/posts",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
    };

    try {
        return await axios(config);
    } catch (err) {
        return err;
    }
};

