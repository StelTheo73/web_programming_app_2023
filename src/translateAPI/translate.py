import inflect
from googletrans import Translator

class TranslatorAPI(Translator):
    def __init__(self):
        super().__init__()
        self.inflect_engine = inflect.engine()

    def translate_text(self, text):
        return self.translate(text).text

    def translate_words_list(self, words_list):
        _list = []
        for word in words_list:
            _list.append(self.translate_text(word))
        return _list

    def to_singular(self, word):
        return self.inflect_engine.singular_noun(word)
