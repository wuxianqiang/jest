
// mock axios
export default {
  get(url) {
    return new Promise((resolve, reject) => {
      if (url === '/list') {
        resolve({ name: 'hello' })
      }
    })
  }
}
