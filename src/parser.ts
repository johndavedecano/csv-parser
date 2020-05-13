import reader from './reader'

/**
 * @param str
 *
 * @returns string
 */
const splitByLine = (str) => str.split(/\r?\n/)

/**
 * @param str
 *
 * @returns string
 */
const splitByComma = (str) =>
  str.split(';').map((col) => {
    const parsed = Number(col)
    return isNaN(parsed) ? col.replace(/['"]+/g, '') : parsed
  })

/**
 * @param  {string} filePath
 *
 * @returns Promise<string|null>
 */
export default async (filePath): Promise<any[]> => {
  try {
    const data = []

    const str: string = await reader(filePath)

    if (str === '' || str === null) {
      return []
    }

    const lines: Array<string> = splitByLine(str)

    if (lines.length === 0) {
      return []
    }

    const columns = splitByComma(lines[0])

    const rows = lines.slice(1)

    for (let i = 0; i < rows.length; i++) {
      const items = splitByComma(rows[i])
      for (let x = 0; x < columns.length; x++) {
        if (!data[i]) {
          data[i] = {}
        }
        data[i][columns[x]] = items[x]
      }
    }

    return data
  } catch (err) {
    return []
  }
}
