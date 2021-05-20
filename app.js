// --- (1) First Task --- //
function convertFahrToCelsius(Fahr) {
  var cel = (Fahr - 32) * (5/9)

  if (isNaN(Fahr) && typeof(Fahr) !== "string") {
    if (Array.isArray(Fahr)) {
      return (
        JSON.stringify(Fahr) + " is not a valid number but a/an array"
      )
    }
    else {
      return (
        JSON.stringify(Fahr) + " is not a valid number but a/an " + typeof(Fahr)
      )
    }
  } 

  else if (typeof(Fahr) === "boolean") {
    return (
      JSON.stringify(Fahr) + " is not a valid number but a/an " + typeof(Fahr)
    )
  }

  else {
    return (
      parseFloat(cel.toFixed(4))
    )
  }
}

convertFahrToCelsius();



// --- (2) Second Task --- //
