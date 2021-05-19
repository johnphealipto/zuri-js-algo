function convertFahrToCelsius(Far) { 
  const Cel = (Far - 32) * 5/9
  const celValue = parseFloat(Cel.toFixed(4))

  if (Array.isArray(Far)) {
    return (JSON.stringify(Far) + ' is not a valid number but a/an array')
  }
  else if (typeof(Far) === "number" && typeof(Far) === "string") {
    return (JSON.stringify(Far) + ' is not a valid number but a/an ' + typeof(Far))
  }
  else if (isNaN(Far)) {
    return Far + ' is not a valid number but a/an ' + typeof(Far)
  }
  else {
    return celValue
  }
}