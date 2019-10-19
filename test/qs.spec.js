// 测试用例的写法
import { sum } from '../index'

// describe表示分组，分组里面一个个的用例
describe('测试基本方法', () => {
  it('测试sum函数', () => {
    expect(sum(1, 2)).toBe(3)
  })
  it('测试1+1=2', () => {
    expect(1 + 1).toBe(2)
  })
  it ('对象比较', () => {
    expect({name: 1}).toEqual({name: 1})
  })
})

it('测试不相等', () => {
  expect(1+1).not.toBe(3) // 1+1不等3
  expect(3).toBeLessThan(5) // 3<5
})

it('测试包含', () => {
  expect('hello').toContain('h')
  expect('hello').toMatch(/h/)
})


// --watchAll监控所有文件
// --watch需要和git进行对比变化的文件
