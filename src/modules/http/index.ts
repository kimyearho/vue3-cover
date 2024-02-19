import axios from 'axios'

const service = axios.create({
    baseURL: 'http://127.0.0.1:8090/api/collections',
    timeout: 5000,
    headers: {
        'Accept-Version': 1,
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
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
