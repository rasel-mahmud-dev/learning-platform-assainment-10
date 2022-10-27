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

export function fetchAllInstructor() {
    return api
        .get("/api/instructors")
        .then(({ data, status }) => {
            return data;
        })
        .catch((ex) => {
            return null;
        });
}


export function fetchCourseCount(){
	return api.get("/api/courses/count")
}
