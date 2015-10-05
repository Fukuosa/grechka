import quotes from './store';
import {shuffleArray} from './utilities';

const App = {

	init () {
		this.index = 0;
		this.cacheElements();
		this.bindEvents();
		this.quotesArr = shuffleArray(quotes);
		this.showQuote();
	},

	cacheElements () {
		this.quoteWrapper = document.getElementById('quoteWrapper');
	},

	bindEvents () {
		this.quoteWrapper.addEventListener('click', e => {
			this.index++;

			if (this.index === this.quotesArr.length) this.index = 0;

			this.showQuote();
		});
	},

	showQuote () {
		this.quoteWrapper.textContent = this.quotesArr[this.index];
	}

};

App.init();