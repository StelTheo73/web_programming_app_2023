function replaceTones(text) {
    let newText = "";
    let newLetter = undefined;
    const tonesMap = {
        "α" : "[αά]",
        "ά" : "[αά]",
        "Α" : "[ΑΆ]",
        "Ά" : "[ΑΆ]",
        "ε" : "[εέ]",
        "έ" : "[εέ]",
        "Ε" : "[ΕΈ]",
        "Έ" : "[ΕΈ]",
        "η" : "[ηή]",
        "ή" : "[ηή]",
        "Η" : "[ΗΉ]",
        "Ή" : "[ΗΉ]",
        "ι" : "[ιίϊΐ]",
        "ί" : "[ιίϊΐ]",
        "ϊ" : "[ιίϊΐ]",
        "ΐ" : "[ιίϊΐ]",
        "Ι" : "[ΙΊΪ]",
        "Ί" : "[ΙΊΪ]",
        "Ϊ" : "[ΙΊΪ]",
        "ο" : "[οό]",
        "ό" : "[οό]",
        "Ο" : "[ΟΌ]",
        "Ό" : "[ΟΌ]",
        "υ" : "[υύϋΰ]",
        "ύ" : "[υύϋΰ]",
        "ϋ" : "[υύϋΰ]",
        "ΰ" : "[υύϋΰ]",
        "Υ" : "[ΥΎΫ]",
        "Ύ" : "[ΥΎΫ]",
        "Ϋ" : "[ΥΎΫ]",
        "ω" : "[ωώ]",
        "ώ" : "[ωώ]",
        "Ω" : "[ΩΏ]",
        "Ώ" : "[ΩΏ]",
        "΅" : "",
        "΄" : "",
        "¨" : ""
    };

    for (let letter of text) {
        newLetter = tonesMap[letter];

        if (newLetter === undefined) {
            newText += letter;
        }
        else {
            newText += newLetter;
        }
    }

    return newText;
}

function removeTones(text) {
    let newText = "";
    let newLetter = undefined;
    const tonesMap = {
        "α" : "α",
        "ά" : "α",
        "Α" : "Α",
        "Ά" : "Α",
        "ε" : "ε",
        "έ" : "ε",
        "Ε" : "Ε",
        "Έ" : "Ε",
        "η" : "η",
        "ή" : "η",
        "Η" : "Η",
        "Ή" : "Η",
        "ι" : "ι",
        "ί" : "ι",
        "ϊ" : "ι",
        "ΐ" : "ι",
        "Ι" : "Ι",
        "Ί" : "Ι",
        "Ϊ" : "Ι",
        "ο" : "ο",
        "ό" : "ο",
        "Ο" : "Ο",
        "Ό" : "Ο",
        "υ" : "υ",
        "ύ" : "υ",
        "ϋ" : "υ",
        "ΰ" : "υ",
        "Υ" : "Υ",
        "Ύ" : "Υ",
        "Ϋ" : "Υ",
        "ω" : "ω",
        "ώ" : "ω",
        "Ω" : "Ω",
        "Ώ" : "Ω",
        "΅" : "",
        "΄" : "",
        "¨" : ""
    };

    for (let letter of text) {
        newLetter = tonesMap[letter];

        if (newLetter === undefined) {
            newText += letter;
        }
        else {
            newText += newLetter;
        }
    }

    return newText;
}

export {replaceTones, removeTones};
