// Library database carries three different types of media: books, CDs, and movies.
// In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

// Book
// •	Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
// •	Getters: all properties have a getter
// •	Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
// Movie
// •	Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
// •	Getters: all properties have a getter
// •	Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
// CD
// •	Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings), duration (number).
// •	Getters: all properties have a getter
// •	Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

class Media {
	constructor(title, type) {
		this._title = title;
		this._type = type;
		this._isCheckedOut = false;
		this._ratings = [];
	}
	get title() {
		return this._title;
	}
	get isCheckedOut() {
		return this._isCheckedOut;
	}
	get ratings() {
		return this._ratings;
	}

	toggleCheckOutStatus() {
		return (this._isCheckedOut = !this._isCheckedOut);
	}

	set isCheckedOut(cond) {
		this._isCheckedOut = cond;
	}

	getAverageRating() {
		return (
			this.ratings.reduce((acc, value) => acc + value, 0) /
			this.ratings.length
		).toFixed(1);
	}

	addRating(rating) {
		if (rating >= 1 && rating <= 10) {
			this.ratings.push(rating);
		}
	}
}

class Book extends Media {
	constructor(title, type, author, pages) {
		super(title, type);
		this._author = author;
		this._pages = pages;
	}
	get author() {
		return this._author;
	}
	get pages() {
		return this._pages;
	}
}

class Movie extends Media {
	constructor(title, type, director, runTime) {
		super(title, type);
		this._director = director;
		this._runTime = runTime;
	}
	get director() {
		return this._director;
	}
	get runTime() {
		return this._runTime;
	}
}

const historyOfViolence = new Book(
	'History of Violence',
	'history',
	'Edouard Louis',
	224,
);

historyOfViolence.toggleCheckOutStatus();
console.log(historyOfViolence.isCheckedOut);
historyOfViolence.addRating(4);
historyOfViolence.addRating(5);
historyOfViolence.addRating(5);
console.log(historyOfViolence.getAverageRating());

const bloodSport = new Movie(
	'Blood Sport',
	'action',
	'Jean-Claude Van Damme',
	122,
);
bloodSport.toggleCheckOutStatus();
console.log(bloodSport.isCheckedOut);
bloodSport.addRating(1);
bloodSport.addRating(1);
bloodSport.addRating(5);

console.log(bloodSport.getAverageRating());

class CD extends Media {
	constructor(title, type, artist, duration) {
		super(title, type);
		this._artist = artist;
		this._songs = [];
		this._duration = duration;
	}

	get artist() {
		return this._artist;
	}

	get songs() {
		return this._songs;
	}

	get duration() {
		return this._duration;
	}

	addSong(song) {
		this.songs.push(song);
	}
	shuffle() {
		return this.songs.sort(() => Math.random() - 0.5);
	}
}

const CD1 = new CD('Life', 'Didactic', 'Bon Jovi', 50);
const CD2 = new CD('Love', 'Romantic', 'Cat Stevens', 45);

CD1.addSong('Song1');
CD1.addSong('Song2');
CD1.addSong('Song3');

CD1.shuffle();

CD2.addSong('Song2');
CD2.addSong('Song1');
CD2.addSong('Song3');

CD2.shuffle();

class Catalog {
	constructor() {
		this.myCatalog = [];
	}
	addItem(item) {
		this.myCatalog.push(item);
	}
}

const myCatalog = new Catalog();

myCatalog.addItem(historyOfViolence);
myCatalog.addItem(bloodSport);
myCatalog.addItem(CD1);
myCatalog.addItem(CD2);

console.log(myCatalog);
