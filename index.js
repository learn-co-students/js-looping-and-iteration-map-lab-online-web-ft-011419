function lowerCaseDrivers (array) {
    return array.map(function(element) {
        return element.toLowerCase();
    })
}

function nameToAttributes(array) {
    return array.map(function(element) {

        let firstLastName = element.split(" ")
        
        return Object.assign({}, { firstName: firstLastName[0] }, { lastName: firstLastName[1] } )

    })
}

function attributesToPhrase(array) {

    return array.map(function(element) {
        return `${element.name} is from ${element.hometown}`
    })
}