import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "aa696506-8a2b-4d87-bc0e-8a9b471afb5f"
    },
})

export const userAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },

    unFollow (id) {
        return instance.delete(`follow/${id}`,)
            .then(response => response.data)
    },

    follow (id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}

export const headerAPI = {
    auth () {
        return instance.get(`auth/me`).then(response => response.data)
    },
    login (email, password, rememberMe = 1) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const profileAPI = {
    getUserProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}
