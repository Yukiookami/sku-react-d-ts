/*
 * @Author: zxy
 * @Date: 2022-04-14 14:10:46
 * @LastEditTime: 2022-04-14 14:16:11
 * @FilePath: /sku-react-d/src/jest.test.js
 */
test('test common matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test('test to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number', () => {
  expect(4).toBeGreaterThan(3)
})

test('test obj', () => {
  expect({name: 'test'}).toEqual({name: 'test'})
})