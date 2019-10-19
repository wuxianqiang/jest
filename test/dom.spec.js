// 测试DOM

// Jest内容了JSDOM

// it('测试删除DOM', () => {
//   document.body.innerHTML = `<div><button></button></div>`

//   let button = document.querySelector('button')
//   expect(button).not.toBe(null)

//   // 自己写的移除的DOM方法
//   removeNode(button);

//   button = document.querySelector('button')
//   expect(button).toBe(null)
// })


import { getDataCallback, getDataPromise } from '../index'

// 异步回调
it('测试回调函数', (done) => {
  getDataCallback((data) => {
    expect(data).toEqual({ name: 'callback' })
    done() // 标识调用完成
  })
})

it('测试promise', () => {
  // 返回的promise会等待完成
  return getDataPromise().then(data => {
    expect(data).toEqual({ name: 'callback' })
  })
})

it('测试promise', async () => {
  // 使用await语法
  const data = await getDataPromise()
  expect(data).toEqual({ name: 'callback' })
})
