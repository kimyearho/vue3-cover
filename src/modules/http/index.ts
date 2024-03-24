import axios from 'axios'

const service = axios.create({
    withCredentials: true,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true
    },
})

/* Request interceptors */
service.interceptors.request.use(
    function (config) {
        // NProgress.start()
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

/* Response interceptors */
service.interceptors.response.use(
    function (response) {
        // NProgress.done()
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default service
