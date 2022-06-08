class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }

    add(word, descr) {
        if (word in this.words) {
            console.log(`${word} already exists in the dictionary`)
        } else {
            this.words[word] = {
                'word': word,
                'description': descr
            }
            console.log(`Word successfully added`)
        }
    }

    remove(key) {
        delete this.words[key]
        console.log(`Word ${key} successfully removed`)
    }

    get(key) {
        return this.words[key]
    }

    showAllWords() {
        for (const key in this.words) {
            console.log(`${this.words[key]['word']} - ${this.words[key]['description']}`)
        }
    }
}

class HardWordsDictionary extends Dictionary {
    constructor(name) {
        super(name)
    }

    add(word, descr, isDifficult = true) {
        if (word in this.words) {
            console.log(`${word} already exists in dictionary`)
        } else {
            this.words[word] = {
                'word': word,
                'description': descr,
                'isDifficult': isDifficult
            }
            console.log(`Word ${word} successfully added`)
        }
    }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();

// дилетант - Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.
// квант - Неделимая часть какой-либо величины в физике.