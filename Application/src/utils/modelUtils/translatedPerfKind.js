/**
 * It takes an object as an argument, and returns an array of the values of the object, where each
 * value is translated to a French word.
 * @param {Object} object - the object you want to translate
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

 export default translatedPerfKind;