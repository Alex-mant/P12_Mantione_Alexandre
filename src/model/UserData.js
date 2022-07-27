const locale = "en-us";
const firstLetterOfDay = ["L", "M", "M", "J", "V", "S", "D"];

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

    this._performance = replaceValuesOfAnArrayByAnotherValues(performance.data, this._perfKind, 'kind', 'value');

    this._score = mainData.score*100 || mainData.todayScore*100;

    this._sessions = replaceValuesOfAnArrayByAnotherValues(sessions.sessions, firstLetterOfDay, 'day', 'sessionLength');
        
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

const formatAllSessionsActivity = (array) => {
 return array.map(({day, kilogram, calories}) => {
    return {day: day = new Date(day).getDate(), kilogram, calories}
  });
}

const replaceValuesOfAnArrayByAnotherValues = (dataArray, replacementArray, firstKey, secondKey) => {
  const callBack = (a, b) => {
    return {[secondKey]: b, [firstKey] :replacementArray[a-1]}
  }
  return dataArray.map((obj) => callBack(obj[firstKey], obj[secondKey]));
}