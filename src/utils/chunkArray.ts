/**
 * Splits an array of n elements to an array of arrays with a defined size
 * @param {*} array Array to split
 * @param {*} chunkSize Number of elements that should be in the
 * @returns A new array of arrays of chunkSize
 */
export const chunkArray = <T>(array: Array<T>, chunkSize: number): Array<Array<T>> => {
  const chunkedArray = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize))
  }
  return chunkedArray
}
