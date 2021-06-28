import axios from "axios";

export const loginUser = async (data) => {
    var config = {
        method: "post",
        url: "http://localhost:8000/api/auth/login",
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
