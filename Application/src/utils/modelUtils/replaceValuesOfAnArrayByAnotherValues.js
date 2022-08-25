/**
 * It takes an array of objects, and replaces the values of a key in each object with the values of
 * another key in each object.
 * @param {Array} dataArray - the array of objects that you want to replace the values of
 * @param {Array} replacementArray - the array with values of object you want to give
 * @param {String} firstKey - the key of the object in the array that you want to replace
 * @param {String} secondKey - the key of the object that you want to keep
 * @param {Boolean} boolean - true or false for starting index 0 or index 1
 * @returns An array of objects.
 */
 const replaceValuesOfAnArrayByAnotherValues = (dataArray, replacementArray, firstKey, secondKey, name) => {
  const callBack = (a, b) => {
    if(name === 'perf'){
      return {[secondKey]: b, [firstKey] :replacementArray[a-1]}
    }else if (name === 'sessions'){
      return {[secondKey]: b, [firstKey] :["D", "L", "M", "M", "J", "V", "S", "D", "L"][a]}
    }
  }
  return dataArray.map((obj) => callBack(obj[firstKey], obj[secondKey]));
}

export default replaceValuesOfAnArrayByAnotherValues;