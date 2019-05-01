function lowerCaseDrivers(array) {
  return array.map(function(driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function(driver) {
    const driver1 = driver.split(' ')[0];
    const driver6 = driver.split(' ')[1];

    return { firstName: driver1, lastName: driver6 };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
