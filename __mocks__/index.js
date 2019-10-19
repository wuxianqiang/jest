
// 会重写了那个接口文件
export const fetchUser = () => {
  return new Promise((resolve, reject) => {
    resolve({name: 'hello'})
  })
}

// npx jest --init 生成配置文件
