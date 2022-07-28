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
 const replaceValuesOfAnArrayByAnotherValues = (dataArray, replacementArray, firstKey, secondKey, boolean) => {
  const callBack = (a, b) => {
    if(boolean === true){
      return {[secondKey]: b, [firstKey] :replacementArray[a-1]}
    }else if (boolean === false){
      return {[secondKey]: b, [firstKey] :replacementArray[a]}
    }
  }
  return dataArray.map((obj) => callBack(obj[firstKey], obj[secondKey]));
}

export default replaceValuesOfAnArrayByAnotherValues;