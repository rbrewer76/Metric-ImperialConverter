/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require("chai")
const assert = chai.assert
const ConvertHandler = require("../controllers/convertHandler.js")

const convertHandler = new ConvertHandler()

suite("Unit Tests", () => {
  
  suite("Function convertHandler.getNum(input)", () => {
    
    test("Whole number input", done => {
      assert.equal(convertHandler.getNum("32L"), 32);
      done()
    })
    
    test("Decimal Input", done => {
      assert.equal(convertHandler.getNum("2.4l"), 2.4)
      done()
    })
    
    test("Fractional Input", done => {
      assert.equal(convertHandler.getNum("1/2m"), 1/2)
      done()
    })
    
    test("Fractional Input w/ Decimal", done => {
      assert.equal(convertHandler.getNum("4.6/2km"), 4.6/2)
      done()      
    })
    
    test("Invalid Input (double fraction)", done => {
      assert.equal(convertHandler.getNum("5.3/2/4km"), null)
      done()   
    })
    
    test("No Numerical Input", done => {
      assert.equal(convertHandler.getNum("m"), 1)
      done()   
    })
  })
  
  suite("Function convertHandler.getUnit(input)", () => {
    
    test("For Each Valid Unit Inputs", done => {
      const input = ["gal","l","mi","km","lbs","kg","GAL","L","MI","KM","LBS","KG"]
      input.forEach(x => {
        assert.equal(convertHandler.getUnit(x), x.toLowerCase())
      })
      done()
    })
    
    test("Unknown Unit Input", done => {
      assert.equal(convertHandler.getUnit("unknown"), null)
      done()
    })
  })
  
  suite("Function convertHandler.getReturnUnit(initUnit)", () => {
    
    test("For Each Valid Unit Inputs", done => {
      const input = ["gal","l","mi","km","lbs","kg"]
      const expect = ["l","gal","km","mi","kg","lbs"]

      input.forEach((ele, i) => {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i])
      })
      done()
    })
  })
  
  suite("Function convertHandler.spellOutUnit(unit)", () => {

    test("For Each Valid Unit Inputs", done => {
      const input  = ["gal", "l", "mi", "km", "lbs", "kg"]
      const expect = ["gallons", "liters", "miles", "kilometers", "pounds", "kilograms"]

      input.forEach((ele, i) => {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i])
      })
      done()
    })
  })
  
  suite("Function convertHandler.convert(num, unit)", () => {
    
    test("Gal to L", done => {
      const input = [5, "gal"]
      const expected = 18.9271
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance
      done()
    })
  
    test("L to Gal", done => {
      const input = [5, "l"]
      const expected = 1.32
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance      
      done()
    })
    
    test("Mi to Km", done => {
      const input = [10, "mi"]
      const expected = 16.09
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance      
      done()
    })
    
    test("Km to Mi", done => {
      const input = [70, "km"]
      const expected = 43.496
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance      
      done()
    })
    
    test("Lbs to Kg", done => {
      const input = [165, "lbs"]
      const expected = 74.84
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance      
      done()
    })
    
    test("Kg to Lbs", done => {
      const input = [20, "kg"]
      const expected = 44.09
      assert.approximately(convertHandler.convert(input[0], input[1]), expected, 0.1) //0.1 tolerance      
      done()
    })
  })
})