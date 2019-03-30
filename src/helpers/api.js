import axios from 'axios'
import Auth from '../store/auth'

export function get(url) {
    return axios({
        method: 'GET',
        url: url,
        headers: {
            'Authorization': `Bearer ${Auth.state.api_token}`,
        }
    })
}

export function post(url, payload) {
    return axios({
        method: 'POST',
        url: url,
        data: payload,
        headers: {
            'Authorization': `Bearer ${Auth.state.api_token}`
        }
    })
}
// delete is reserved keyword
export function del(url) {
    return axios({
        method: 'DELETE',
        url: url,
        headers: {
            'Authorization': `Bearer ${Auth.state.api_token}`
        }
    })
}

export function interceptors(cb) {
    axios.interceptors.response.use((res) => {
        return res;
    }, (err) => {
        cb(err)
        return Promise.reject(err)
    })
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                Auth.remove();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}