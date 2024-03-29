/**
 * If the array is less than 8 elements long, add a new object to the beginning of the array and
 * another to the end of the array.
 * @component
 * @param {Array} array - the array of objects that you want to add mocked data to
 * @returns The array with the new values added.
 */
 const addMockedDataForLineChart = (array) => {
  if(array.length < 8){
    array.splice(0, 0, array[0]);
    array.splice(array.length , 0 , array[7]);
  }
  return array
}


export default addMockedDataForLineChart;