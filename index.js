// Write your solution in this file!
let employee = {

name: "Jarreth",
streetAdress: "122 Capricorn",

}

function updateEmployeeWithKeyAndValue (object, key, value) {
    const newObject = {...object};

    newObject[key] = value;

    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue (object, key, value) {
    object[key] = value;

    return object;
}

function deleteFromEmployeeByKey(object, key, value) {
    const newObject = {...object};
    //newObject[key] = value;

    delete newObject[key];
    return newObject;
      // delete object[key];
       // return object;
}

function destructivelyDeleteFromEmployeeByKey (object, key, value) {
    const newObject = {...object};
    //newObject[key] = value;

    delete object[key];
    return object;
}