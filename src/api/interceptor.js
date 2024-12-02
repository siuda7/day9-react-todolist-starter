import axios from "axios";

const instance = axios.create({
    // https://67495c88868020296630ab6c.mockapi.io/api/v2
    baseURL: 'http://localhost:8080/',
    //baseURL: 'https://67495c88868020296630ab6c.mockapi.io/api/v1',
    timeout: 5000
});

// instance.interceptors.request.use(
//     (config) => {
//         config.metadata = {start: new Date()}
//         console.log("Request: ", config)
//         return config
//     },
//     (error) => {
//         console.log("Request error: ", error)
//         return Promise.reject(error)
//     }
// );

// instance.interceptors.response.use(
//     (response) => {
//         const timeDiff = new Date() - response.config.metadata.start
//         console.log("URL: ", response.config.url, "Time diff: ", timeDiff, "ms")
//         return response
//     },
//     (error) => {
//         if (error.response && error.response.status === 404) {
//             window.location.href = '/not-found'
//         }
//         if (error.response && error.response.status === 500) {
//             window.location.href = '/hard-stop'
//         }
//         console.error("Request error: ", error)
//         return Promise.reject(error)
//     }
// )

export default instance;

