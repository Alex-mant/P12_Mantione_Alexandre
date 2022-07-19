import axios from "axios";

// TEST : Object relational mapping ??

const myUrl = window.location.search;
const apiRootUrl = 'http://localhost:3000/user';
const endpoints = [
  `/`,
  `/activity`,
  `/performance`,
  `/average-sessions`,
]

class TestData {
  
  constructor(dataFromDb){
    this._mainData = dataFromDb.mainData;
    this._activity = dataFromDb.activity;
    this._sessions = dataFromDb.sessions;
    this._performance = dataFromDb.performance;
  }
  
  //getter  
  get activity(){
    return this._activity = this._allData.activity.sessions.map(({day, kilogram, calories}) => {
      return {day: day = new Date(day).getDate(), kilogram, calories}
    });
  }
  get performance(){
    this._perfKind = Object.values(this._allData.performance.kind);
    return this._performance = this._allData.performance.data.map(({value, kind}) => {
      return {value, kind: this._perfKind[kind-1] || ''}
    });
  }
  get sessions(){
    return this._sessions = this._allData.sessions.sessions.map(({day, sessionLength}) => {
      return ({sessionLength, day: day = ["L", "M", "M", "J", "V", "S", "D"][day-1] || ''})
    });;
  }
  get score(){
    return this._score = this._allData.mainData?.score*100 || this._allData.mainData?.todayScore*100;
  }
  get keyData(){
    const locale = "en-us";
    return this._keyData = {
      calorieCount : this._allData.mainData.keyData.calorieCount.toLocaleString(locale),
      proteinCount: this._allData.mainData.keyData.proteinCount.toLocaleString(locale),
      carbohydrateCount: this._allData.mainData.keyData.carbohydrateCount.toLocaleString(locale),
      lipidCount: this._allData.mainData.keyData.lipidCount.toLocaleString(locale),
    };
  }
  get firstName(){
    return this._mainData.userInfos.firstName;
  }
}

class Model {
  static async getAllData(){
    this._userId = new URLSearchParams(myUrl).get('user');
    const dataFromDb = await Promise
    .all(endpoints.map((endpoint) => 
    axios
    .get(`${apiRootUrl}/${this._userId}${endpoint}`)))
    .then(axios
      .spread(({data:{data:mainData}}, {data:{data:activity}}, {data:{data:performance}}, {data:{data:sessions}}) => { 
        return {mainData, activity, performance, sessions}
      })
    );
    
    return new TestData(dataFromDb)
  }    
}
  
export default Model;
  