/**
 * It takes an array of objects, and returns an array of objects with the same properties, but with the
 * day property converted to a number.
 * @param {Array} array - [{day: "2019-01-01", kilogram: "80", calories: "2000"}, {day: "2019-01-02", kilogram:
 * "81", calories: "2000"}...]
 * @returns An array of objects with the day property being a number.
 */
 const formatAllSessionsActivity = (array) => {
  return array.map(({day, kilogram, calories}) => {
     return {day: day = new Date(day).getDate(), kilogram, calories}
   });
 }


 export default formatAllSessionsActivity;