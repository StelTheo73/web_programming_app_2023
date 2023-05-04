function parseValue(value, defaultValue="")  {    
    if ((value != undefined) & (value != null)) return value;
    else {
      return defaultValue;
    }
}

export { parseValue };
