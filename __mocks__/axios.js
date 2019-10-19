
// mock axios
export default {
  get(url) {
    return new Promise((resolve, reject) => {
      if (url === '/user') {
        resolve({ name: 'hello' })
      }
    })
  }
}
