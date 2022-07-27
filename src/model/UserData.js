const locale = "en-us"

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

    this._activity = activity.sessions.map(({day, kilogram, calories}) => {
      return {day: day = new Date(day).getDate(), kilogram, calories}
    });

    this._perfKind = Object.values(performance.kind).map((kind) => {
      if(kind === "cardio") return kind = "Cardio";
      if(kind === "energy") return kind = "Energie";
      if(kind === "endurance") return kind = "Endurance";
      if(kind === "strength") return kind = "Force";
      if(kind === "speed") return kind = "Vitesse";
      if(kind === "intensity") return kind = "Intensité";
      return kind
    });

    this._performance = performance.data.map(({value, kind}) => {
      return {value, kind: this._perfKind[kind-1] || ''}
    });

    this._score = mainData?.score*100 || mainData?.todayScore*100;

    this._sessions = sessions.sessions.map(({day, sessionLength}) => {
      return ({sessionLength, day: day = ["L", "M", "M", "J", "V", "S", "D"][day-1] || ''})
    });
    
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