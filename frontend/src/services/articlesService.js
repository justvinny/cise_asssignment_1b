import axios from "axios";

export const addArticle = async (article) => {
    return axios.post("/api/articles", article);
};

export const getArticle = async () => {
    return axios.get("/api/articles");
};
