import {Loading, Notification,MessageBox } from 'element-ui';
import qs from 'qs';
export default function ({ $axios, redirect }) {
  // switch (process.env.NODE_ENV){
  //   case 'production':
      $axios.defaults.baseURL = '/api'
  //     break;
  //   case 'test':
  //     $axios.defaults.baseURL = 'http"//api.456.com'
  //     break;
  //   default:
  //     $axios.defaults.baseURL = 'http"//api.789.com'
  //     break;
  // }

  $axios.defaults.timeout=10000;
  $axios.defaults.withCredentials = true

  //数据格式
  $axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  $axios.defaults.transformRequest = data=>qs.stringify(data);

  //请求拦截器
  $axios.onRequest(config => {
    //携带token
    let token = localStorage.getItem('token')
    token && (config.headers.Authorization = token)

    return config;
  })
  //请求错误拦截器
  // $axios.onRequestError(err=>{
  //   console.log('请求错误拦截器')
  //   Notification.error({
  //     title: '错误',
  //     message: err
  //   })
  //   return err
  // })
  //响应拦截器
  $axios.onResponse(response=>{
    return response
  })
  //响应错误拦截器
  // $axios.onResponseError(err=>{
  //   console.log('响应错误拦截器')
  //   Notification.error({
  //     title: '错误',
  //     message: err
  //   })
  //   return err
  // })

  $axios.onError(error => {
    console.log('错误拦截器')
    const code = parseInt(error.response && error.response.status)
    // if (code) {
    //   switch(code){
    //     case 401:
    //       //一般未登录
    //       break;
    //     case 403:
    //       //一般token过期，
    //       break;
    //     case 404:
    //       //找不到页面
    //       break
    //   }
    // }else{
    //   //判断断网
    //   if(!window.navigator.onLine){
    //     //断网处理：可以跳转到断网页面
    //     return
    //   }
    //   return Promise.reject(error);
    // }
    // return error
  })
}
