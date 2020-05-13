import path from 'path'
import parser from './parser'

test('should return empty array if empty', async () => {
  const data = await parser('notfound.csv')
  expect(data).toEqual([])
})

test('should return data', async () => {
  const data = await parser(path.join(__dirname, 'data.csv'))
  expect(data.length > 0).toBeTruthy()
})
