class Dictionary {
    constructor(name) {
        this.name = name
        this.words = {}
    }

    add(word, descr) {
        if (word in this.words) {
            console.log(`${word} already exists in dictionary`)
        } else {
            this.words[word] = {
                'word': word,
                'description': descr
            }
            console.log('Word successfully added')
        }
    }

    remove(key) {
        delete this.words[key]
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

const dictionary = new Dictionary("Толковый словарь");

dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add("Docker", "is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers");
dictionary.add("Веб-разработчик", "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие");
dictionary.add("JavaScript", "популярный язык программирования");

dictionary.remove("JavaScript");

console.log(dictionary.get('Docker'))

dictionary.showAllWords();

console.log(dictionary)