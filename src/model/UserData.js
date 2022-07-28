const locale = "en-us";
const firstLetterOfDays = ["START","L", "M", "M", "J", "V", "S", "D","END"];

class UserData {
  constructor({
    mainData,
    activity,
    performance,
    sessions
  }) {
    this._mainData = mainData;

    this._userId = new URLSearchParams(window.location.search).get('user')

    this._userFirstName = mainData.userInfos.firstName;

    this._activity = formatAllSessionsActivity(activity.sessions);

    this._perfKind = translatedPerfKind(performance.kind);

    this._performance = replaceValuesOfAnArrayByAnotherValues(performance.data, this._perfKind, 'kind', 'value', true);

    this._score = mainData.score*100 || mainData.todayScore*100;

    this._sessions = replaceValuesOfAnArrayByAnotherValues(addFakeDataForLineChart(sessions.sessions), firstLetterOfDays, 'day', 'sessionLength', false);
        
    this._keyData = {
      calorieCount : mainData.keyData.calorieCount.toLocaleString(locale),
      proteinCount: mainData.keyData.proteinCount.toLocaleString(locale),
      carbohydrateCount: mainData.keyData.carbohydrateCount.toLocaleString(locale),
      lipidCount: mainData.keyData.lipidCount.toLocaleString(locale),
    };
  }

  //getter
  get mainData(){
    return this._mainData;
  }
  get activity(){
    return this._activity;
  }
  get performance(){
    return this._performance;
  }
  get sessions(){
    return this._sessions;
  }
  get score(){
    return this._score;
  }
  get keyData(){
    return this._keyData;
  }
  get firstName(){
    return this._userFirstName
  }
  get currentId(){
   return this._userId
  }
}

export default UserData;


/* Data Formated */

/**
 * It takes an object as an argument, and returns an array of the values of the object, where each
 * value is translated to a French word.
 * @param object - the object you want to translate
 * @returns An array of translated values.
 */
const translatedPerfKind = (object) => {
 return Object.values(object).map((kind) => {
    if(kind === "cardio") return kind = "Cardio";
    if(kind === "energy") return kind = "Energie";
    if(kind === "endurance") return kind = "Endurance";
    if(kind === "strength") return kind = "Force";
    if(kind === "speed") return kind = "Vitesse";
    if(kind === "intensity") return kind = "Intensité";
    return kind
  })
}

/**
 * It takes an array of objects, and returns an array of objects with the same properties, but with the
 * day property converted to a number.
 * @param array - [{day: "2019-01-01", kilogram: "80", calories: "2000"}, {day: "2019-01-02", kilogram:
 * "81", calories: "2000"}, {day: "2019-01-03", kilogram: "82", calories
 * @returns An array of objects with the day property being a number.
 */
const formatAllSessionsActivity = (array) => {
 return array.map(({day, kilogram, calories}) => {
    return {day: day = new Date(day).getDate(), kilogram, calories}
  });
}

/**
 * It takes an array of objects, and replaces the values of a key in each object with the values of
 * another key in each object.
 * @param dataArray - the array of objects that you want to replace the values of
 * @param replacementArray - the array with values of object you want to give
 * @param firstKey - the key of the object in the array that you want to replace
 * @param secondKey - the key of the object that you want to keep
 * @param boolean - true or false for starting index 0 or index 1
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



/**
 * If the array is less than 8 elements long, add a new object to the beginning of the array and
 * another to the end of the array.
 * @param array - the array of objects that you want to add fake data to
 * @returns The array with the new values added.
 */
const addFakeDataForLineChart = (array) => {
  if(array.length < 8){
    array.splice(0, 0, array[0]);
    array.splice(array.length , 0 , array[7]);
  }
  return array
}