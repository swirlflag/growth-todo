import axios from "axios";

export const API_getQuiz = ():object => {
    return axios.get("https://opentdb.com/api.php?amount=10");
    // return axios.get("https://opentdb.com/a");
};