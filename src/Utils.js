
/**
 * Splits an array of n elements to an array of arrays with a defined size
 * @param {*} array Array to split
 * @param {*} chunkSize Number of elements that should be in the 
 * @returns A new array of arrays of chunkSize
 */
export function chunkArray(array, chunkSize) {
    let chunkedArray = [];
    for(var i = 0; i < array.length; i += chunkSize) {
        chunkedArray.push(array.slice(i, i+chunkSize));
    }
    return chunkedArray;
}