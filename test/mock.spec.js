// jest.mock('../index.js') // 使用了__mocks__里面的文件
import { forEach, fetchUser, getDataCallback } from '../index' // __mocks__/index.js
// let forEach = jest.requireActual('../index.js') // 这是真实的文件./index.js
jest.useFakeTimers()
// 真的定时器都改成假的定时器，让它里面可以执行，不要等那么久

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

// mock定时器

// mock文件，mock模块，某个第三方文件
it('测试timer到达的时间', () => {
  // mock函数
  let fn = jest.fn()
  // 检查mock函数是否被调用了
  getDataCallback(fn)
  // 把所有的定时器执行
  jest.runOnlyPendingTimers()
  // 这里判断
  expect(fn).toBeCalled()
})
