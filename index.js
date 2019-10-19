import Axios from "axios";

export function sum (a, b) {
  return a + b
}


// 回调
export const getDataCallback = fn => {
  setTimeout(() => {
    fn({name: 'callback'})
  }, 1000);
}

// promise
export const getDataPromise = fn => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name: 'callback'})
    }, 1000);
  })
}

// 测试函数会执行三次
export const forEach = (arr, fn) => {
  arr.forEach(fn)
}

// 测试接口调用
export const fetchUser = () => {
  return axios.get('/list')
}

// console.log(sum(1, 2), 3)
