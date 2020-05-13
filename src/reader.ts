import path from 'path'
import fs from 'fs'

/**
 * @param  {string} filePath
 *
 * @returns Promise<string|null>
 */
export default (filePath): Promise<string | null> => {
  return new Promise((resolve) => {
    const ext = path.extname(filePath)
    if (ext !== '.csv') {
      throw new Error('Reader only accepts csv files.')
    }
    fs.readFile(filePath, 'utf-8', (err, data): void => {
      if (err) {
        resolve(null)
      } else {
        resolve(data)
      }
    })
  })
}
