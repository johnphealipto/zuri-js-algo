//
// --- (1) First Task --- //

function convertFahrToCelsius(param) {
  var calc = (param - 32) * (5/9)
  var result = parseFloat(calc.toFixed(4))

  if (isNaN(param)) {
    if (Array.isArray(param)) {
      return (
        JSON.stringify(param) + " is not a valid number but a/an array"
      )
    }
    else {
      return (
        JSON.stringify(param) + " is not a valid number but a/an " + typeof(param)
      )
    }
  } 

  else if (typeof(param) === "boolean") {
    return (
      JSON.stringify(param) + " is not a valid number but a/an boolean"
    )
  }

  else {
    return result
  }
}

convertFahrToCelsius();



//
// --- (2) Second Task --- //

function checkYuGiOh(n) {
  var arraySet = []
  var count = 1
  var errorMsg = "invalid parameter: " + JSON.stringify(n)
  
  if (isNaN(n) || typeof(n) === "boolean" || typeof(n) === "null") {
    return errorMsg
  }

  for (count; count <= n; count++) {
    if (count % 2 == 0 && count % 3 == 0 && count % 5 == 0) {
      arraySet.push("yu-gi-oh")
    }
    else if (count % 2 == 0 && count % 3 == 0) {
      arraySet.push("yu-gi")
    }
    else if (count % 2 == 0 && count % 5 == 0) {
      arraySet.push("yu-oh")
    }
    else if (count % 3 == 0 && count % 5 == 0) {
      arraySet.push("gi-oh")
    }
    else if (count % 2 == 0) {
      arraySet.push("yu")
    }
    else if (count % 3 == 0) {
      arraySet.push("gi")
    }
    else if (count % 5 == 0) {
      arraySet.push("oh")
    }
    else {
      arraySet.push(count)
    }
  }

  return arraySet
}

checkYuGiOh();