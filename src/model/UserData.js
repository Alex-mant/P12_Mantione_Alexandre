import addMockedForLineChart from "../utils/modelUtils/addMockedDataForLineChart";
import formatAllSessionsActivity from "../utils/modelUtils/formatAllSessionsActivity";
import replaceValuesOfAnArrayByAnotherValues from "../utils/modelUtils/replaceValuesOfAnArrayByAnotherValues";
import translatedPerfKind from "../utils/modelUtils/translatedPerfKind";

const locale = 'en-us'

class UserData {
  constructor({
    mainData,
    activity,
    performance,
    sessions
  }) {
    this._mainData = mainData;
    this._activity = activity;
    this._performance = performance;
    this._sessions = sessions;
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
    return this._mainData.score*100 || this._mainData.todayScore*100;
  }
  get keyData(){
    return this._mainData.keyData;
  }
  get firstName(){
    return this._mainData.userInfos.firstName
  }
  get currentId(){
   return new URLSearchParams(window.location.search).get('user')
  }
  get formatActivity(){
    return formatAllSessionsActivity(this._activity.sessions)
  }
  get perfKind(){
    return translatedPerfKind(this._performance.kind)
  }
  get formatPerformance(){
    return replaceValuesOfAnArrayByAnotherValues(this._performance.data, this.perfKind, 'kind', 'value', 'perf')
  }
  get formatSessions(){
    return replaceValuesOfAnArrayByAnotherValues(addMockedForLineChart(this._sessions.sessions), 'noArray', 'day', 'sessionLength', 'sessions')
  }
  get formatKeyData(){
    return {
      calorieCount : this._mainData.keyData.calorieCount.toLocaleString(locale),
      proteinCount: this._mainData.keyData.proteinCount.toLocaleString(locale),
      carbohydrateCount: this._mainData.keyData.carbohydrateCount.toLocaleString(locale),
      lipidCount: this._mainData.keyData.lipidCount.toLocaleString(locale),
    }
  }
}

export default UserData;
