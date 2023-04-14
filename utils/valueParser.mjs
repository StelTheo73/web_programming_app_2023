function parseValue(value, defaultValue="")  {
    let typeMap = {
      "string" : "",
      "number" : 0
    }
    
    if ((value != undefined) & (value != null)) return value;
    else {
      return defaultValue;
    }
}

export { parseValue };
