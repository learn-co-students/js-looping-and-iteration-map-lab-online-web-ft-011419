// Code your solution in this file.
function lowerCaseDrivers(data){
  return data.map(function(driver){
    return   driver.toLowerCase()
  })
}

function nameToAttributes(data){
  return data.map(function (driver){
    const  newnames = driver.split(" ")
    return {firstName:  newnames[0] , lastName:newnames[1] };
  })
}

function  attributesToPhrase(data){
  return data.map(function (driver){
    return `${driver["name"]} is from ${driver["hometown"]}`;

  });
}
// function attributesToPhrase(drivers) {
//   return drivers.map(function(driver) {
//     return `${driver.name} is from ${driver.hometown}`;
//   });
// }
