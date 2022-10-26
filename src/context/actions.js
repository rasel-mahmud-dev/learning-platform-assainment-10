import api from "../axios/index.js";

export function fetchCategories() {
    return api
        .get("/api/categories")
        .then(({ data, status }) => {
            return data;
        })
        .catch((ex) => {
            return null;
        });
}
