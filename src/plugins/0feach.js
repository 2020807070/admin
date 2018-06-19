

/**
 * 真正的请求
 * @param url 请求地址
 * @param data 请求参数
 * @param method 请求方式
 */

function commonFetch(url, data, method = 'GET') {

    let initObj = {}
    if (method == 'GET') {
        url: url + "?" + obj2String(data),
            initObj = {
                method,
                credentials: 'include'
            }
    } else {
        initObj = {
            method,
            credentials: 'include',  
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        }
    }

    return fetch(url, initObj).then((res) => {
        if (res.status >= 400) {
            return res.json().then((error) => {
                return Promise.reject(error)
            })
        } else {
            return res.json();
        }
    })
}



export default {
    install(Vue, option) {
        Vue.prototype.$fetch = {
            get: (url, data) => {
                return commonFetch(url, data, 'GET')
            },
            post: (url, data) => {
                return commonFetch(url, data, 'POST')
            },
            put: (url, data) => {
                return commonFetch(url, data, 'PUT')
            },
            delete: (url, data) => {
                return commonFetch(url, data, 'DELETE')
            },
            patch: (url, data) => {
                return commonFetch(url, data, 'PATCH')
            }
        }
    }
}