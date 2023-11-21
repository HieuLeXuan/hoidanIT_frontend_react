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

    getAllUser(id) {
        return axios.get(`/api/get-users/${id}`);
    },

    createUserService(data) {
        return axios.post(`/api/create-user`, data);
    },

    editUserService(data, id) {
        return axios.put(`/api/edit-user/${id}`, data);
    },

    deleteUserService(id) {
        return axios.delete(`/api/delete-user/${id}`);
    }

};

export default authService;
