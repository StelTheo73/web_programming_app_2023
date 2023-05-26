class RegisterParser {
  constructor() {}

  static mainParser(field, value) {
    const forbiddenCharacters = /[\{\}\[\]\(\)\^\+\*\/\=\|<>\~\`;:]/;

    if (forbiddenCharacters.test(value)) {
      throw new Error(`${field} contains forbidden characters`);
    }
  }
}

export { RegisterParser };
