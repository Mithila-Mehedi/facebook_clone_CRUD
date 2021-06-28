import axios from "axios";

export const signUpUser = async (data) => {
    var config = {
        method: "post",
        url: "http://localhost:8000/api/auth/register",
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
