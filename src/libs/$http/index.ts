import axios from 'axios';

const createHttp = (config = {}) => {
    const instance = axios.create({
        baseURL: '',
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'},
        ...config,
    });

    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        // get 请求，添加到 url 中
        const icode = '605E4FF6202051C5';
        config.params = { ...config.params, icode }
        // 其他请求，添加到 body 中
        // 如果是上传文件，添加到 FormData 中
        if (config.data instanceof FormData) {
            config.data.append('icode', icode)
        } else {
            // 普通的 body 对象，添加到 data 中
            config.data = { ...config.data, icode }
        }
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    return instance;
}

export const $imooc = createHttp({
    baseURL: 'http://apis.imooc.com/api'
});
