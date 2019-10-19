
// 会重写了那个接口文件
export const fetchUser = () => {
  return new Promise((resolve, reject) => {
    resolve({name: 'hello'})
  })
}
