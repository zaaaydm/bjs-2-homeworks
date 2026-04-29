//1

class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  set state(newState) {
    if(newState < 0) {
      this._state = 0;  
    } else if(newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }

  fix() {
    this.state = this._state * 1.5;
  }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if(book[type] === value) {
                return book
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        let index = this.books.findIndex(book => book.name === bookName);

        if (index !== -1) {
            let borrowedBook = this.books.splice(index, 1)[0];
            return borrowedBook;
        }
        
        return null;
    }
}

//3

class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      return;
    }

    if (!this.marks[subject]) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0;
    }

    let sum = this.marks[subject].reduce((acc, marc) => acc + marc, 0);

    return sum / this.marks[subject].length;
  }

  getAverage() {
    let subjects = Object.keys(this.marks);

    if (subjects.length === 0) {
      return 0;
    }

    let sumAverage = subjects.reduce((sum, subject) => sum + this.getAverageBySubject(subject), 0);

    return sumAverage / subjects.length;
  }
}