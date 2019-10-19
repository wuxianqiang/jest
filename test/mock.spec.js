// jest.mock('../index.js') // 使用了__mocks__里面的文件
import { forEach, fetchUser } from '../index' // __mocks__/index.js
// let forEach = jest.requireActual('../index.js') // 这是真实的文件./index.js

it('测试foreach，回调函数执行次数', () => {
  // mock函数能记录状态
  let fn = jest.fn()
  // forEach有多少项回调函数就执行多少次
  forEach([1,2,3], fn)
  expect(fn.mock.calls.length).toBe(3)
})


it('测试请求列表', async () => {
  // 把请求的逻辑mock
  const data = await fetchUser()
  expect(data).toEqual({name: 'hello'})
})

// mock文件，mock模块，某个第三方文件
