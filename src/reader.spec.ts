import path from 'path'

import Reader from './reader'

test('should throw an error if correct file is not given', async () => {
  await expect(Reader('')).rejects.toThrow('Reader only accepts csv files.')
})

test('should return null', async () => {
  await expect(Reader('notfound.csv')).resolves.toBeNull()
})

test('should return data', async () => {
  await expect(Reader(path.join(__dirname, './data.csv'))).resolves.toBeTruthy()
})
