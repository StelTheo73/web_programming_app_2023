import { parseValue } from "../utils/valueParser.mjs";

class RegisterParser {
  constructor() {}

  static parseRegister(password) {
    const forbiddenCharacters = /[\{\}\[\]\(\)\^\+\*\/\=\|<>\~\`;:]/;

    if (forbiddenCharacters.test(password)) {
      throw new Error("Password contains forbidden characters");
    }

    let parsedPassword = parseValue(password);

    return parsedPassword;
  }
}

export { RegisterParser };
