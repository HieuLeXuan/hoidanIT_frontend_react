import axios from '../axios';
import * as queryString from 'query-string';

const authService = {

    /**
     * Đăng nhập hệ thống
     * {
     *  "username": "string",
     *  "password": "string"
     * }
     */
    login(email, password) {
        return axios.post(`/api/login`, { email, password })
    },

};

export default authService;
