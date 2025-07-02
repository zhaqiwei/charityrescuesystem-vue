import axios from "axios";
import { ElMessage } from "element-plus";

const request = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
    timeout: 30000
});

request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';

    // 添加token（如果存在）
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
}, error => {
    return Promise.reject(error);
});

request.interceptors.response.use(response => {
    return response.data;
}, error => {
    let errorMessage = '请求错误';

    if (error.response) {
        switch (error.response.status) {
            case 400:
                errorMessage = '请求参数错误';
                break;
            case 401:
                errorMessage = '未授权，请登录';
                break;
            case 404:
                errorMessage = '未找到请求资源';
                break;
            case 500:
                errorMessage = '服务器内部错误';
                break;
            default:
                errorMessage = `请求错误: ${error.response.status}`;
        }
    } else {
        errorMessage = error.message || '网络错误';
    }

    ElMessage.error(errorMessage);
    return Promise.reject(error);
});

// 新增：打印当前 baseURL（开发环境调试用）
console.log('当前环境的 baseURL:', import.meta.env.VITE_API_BASE_URL);

export default request;