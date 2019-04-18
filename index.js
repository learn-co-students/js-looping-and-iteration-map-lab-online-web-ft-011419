function lowerCaseDrivers(drivers) {
  return drivers.map(function(name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(name) {
    const splitName = name.split(" ");
    // return Object.assign({}, { firstName: splitName[0] }, { lastName: splitName[1] });
    return { firstName: splitName[0] , lastName: splitName[1] };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
