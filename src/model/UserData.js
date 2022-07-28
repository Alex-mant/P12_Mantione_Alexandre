import addFakeDataForLineChart from "../utils/modelUtils/addFakeDataForLineChart";
import formatAllSessionsActivity from "../utils/modelUtils/formatAllSessionsActivity";
import replaceValuesOfAnArrayByAnotherValues from "../utils/modelUtils/replaceValuesOfAnArrayByAnotherValues";
import translatedPerfKind from "../utils/modelUtils/translatedPerfKind";

const locale = "en-us";
const firstLetterOfDays = ["D","L", "M", "M", "J", "V", "S", "D","L"];

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
