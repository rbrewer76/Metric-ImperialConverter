class ConvertHandler {
  
  constructor ( ) {
    this.units = {
      gal: {name: "gallons"},
      l: {name: "liters"},
      kg: {name: "kilograms"},
      lbs: {name: "pounds"},
      mi: {name: "miles"},
      km: {name: "kilometers"}
    }
  
    this.unitsConversion = {
      gal: {convertTo: "l", rate: 3.78541},
      l: {convertTo: "gal", rate: 0.26417},
      kg: {convertTo: "lbs", rate: 2.20462},
      lbs: {convertTo: "kg", rate: 0.453592},
      mi: {convertTo: "km", rate: 1.60934},
      km: {convertTo: "mi", rate: 0.621371}
    }
  }
   
  getNum(input) {
    input = input.toLowerCase()
    const regEx =  /[a-z]/
    input = input.split(regEx)
    const divides  = input[0].match(/\//g)
    
    input = eval(input[0])

    // double divide
    if (divides !== null && divides.length > 1) 
      input = null
    
    // default
    if (input === undefined)
      input = 1

    return input
  }
  
  getUnit(input) {
    input = input.toLowerCase()
    input = input.split(/([A-Za-z]+)/)
    input = input[1]

    // invalid unit
    if (!this.units.hasOwnProperty(input))
      input = null
    
    return input
  }
  
  getReturnUnit(initUnit) {
    initUnit = initUnit.toLowerCase()
    return this.unitsConversion[initUnit].convertTo
  }

  spellOutUnit(unit) {
    unit = unit.toLowerCase()
    return this.units[unit].name
  }
  
  convert(initNum, initUnit) {
    initUnit = initUnit.toLowerCase()
    return Number((initNum * this.unitsConversion[initUnit].rate).toFixed(5))
  }

  getString(initNum,initUnit,returnNum,returnUnit) {
    return {initNum, initUnit, returnNum, returnUnit,
      string: initNum + " " + this.spellOutUnit(initUnit)
        + " converts to " + returnNum.toFixed(5) + " " + this.spellOutUnit(returnUnit)}
  }    
}

module.exports = ConvertHandler
