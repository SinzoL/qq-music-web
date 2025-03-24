import axios from 'axios';
import { ElLoading  } from 'element-plus'; // 以 element-plus 为例

// 创建 axios 实例
const instance = axios.create({
  baseURL: 'http://localhost:3200', // 设置基础 URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json', // 默认请求头
  },
});

let loadingInstance;  

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 显示 loading
    loadingInstance = ElLoading .service({ fullscreen: true });

    // 打印完整的请求 URL
    const fullUrl = `${config.baseURL}${config.url}?${new URLSearchParams(config.params).toString()}`;
    
    console.log('请求 :', fullUrl);

    return config;
  },
  (error) => {
    // 隐藏 loading
    if (loadingInstance) {
      loadingInstance.close();
    }
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 隐藏 loading
    if (loadingInstance) {
      loadingInstance.close();
    }

    const {status, data } = response;
    console.log("response", response);
    console.log("data", data);
    if (status === 200) {
      return data; // 返回实际数据
    } else {
      console.log("请求失败");
      return Promise.reject(new Error('请求失败')); // 抛出错误
    }
  },
  (error) => {
    // 隐藏 loading
    if (loadingInstance) {
      loadingInstance.close();
    }

    if (error.response) {
      const { status, data } = error.response;
      switch (status) {
        case 400:
          console.error('请求错误：', data.message || '参数错误');
          break;
        case 401:
          console.error('未授权：', data.message || '请登录');
          break;
        case 403:
          console.error('禁止访问：', data.message || '无权限');
          break;
        case 404:
          console.error('资源未找到：', data.message || '请求的资源不存在');
          break;
        case 500:
          console.error('服务器错误：', data.message || '服务器内部错误');
          break;
        case 502:
          console.error('网关错误：', data.message || '网关错误');
          break;
        case 503:
          console.error('服务不可用：', data.message || '服务不可用');
          break;
        case 504:
          console.error('网关超时：', data.message || '网关超时');
          break;
        default:
          console.error('未知错误：', data.message || '未知错误');
      }
    } else if (error.request) {
      console.error('请求未收到响应：', error.request);
    } else {
      console.error('请求错误：', error.message);
    }
    return Promise.reject(error);
  }
);

// 封装 GET 请求
export function get(url, params = {}, config = {}) {
  return instance.get(url, {params, ...config});
}

// 封装 POST 请求
export function post(url, data, config = {}) {
  return instance.post(url, data, config);
}

// 导出封装后的 axios 实例
export default instance;