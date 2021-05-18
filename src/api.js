const fetch = require('node-fetch');
const EventEmitter = require('events');
const base = 'https://api.cool-img-api.ml/';
const { getContent } = require('./function');

class API extends EventEmitter {

	/**
     * @param {string} text Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async achievement(text) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `achievement?text=${text}`;
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @param {string} earth Text to apprear
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async alwayshasbeen(text, earth, image) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!earth) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `alwayshasbeen?text=${text}&earth=${earth}&image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async amiajoke(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `amiajoke?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async bad(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `bad?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async beautiful(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `beautiful?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @param {string} image2 The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async bed(image, image2) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!image2) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `bed?image=${image}&image2=${image2}`;
		return await getContent(url);
	}

	/**
     * @returns {Buffer} The Processed image Buffer
     */
	async birb() {
		const url = base + 'birb';
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async blur(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `blur?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async calling(text) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `calling?text=${text}`;
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async captcha(text) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `captcha?text=${text}`;
		return await getContent(url);
	}

	/**
     * @returns {Buffer} The Processed image Buffer
     */
	async cats() {
		const url = base + 'cats';
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async challenge(text) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `challenge?text=${text}`;
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async changemymind(text) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `changemymind?text=${text}`;
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async clyde(text) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `clyde?text=${text}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async communist(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `communist?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @param {string} text2 Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async didyoumean(text, text2) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!text2) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `didyoumean?top=${text}&bottom=${text2}`;
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @param {string} color Color of the username
     * @param {string} username Username to appear
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async discord_message(text, color, username, image) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!color) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!username) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `discord-message?message=${encodeURIComponent(text)}&color=${encodeURIComponent(color)}&username=${encodeURIComponent(username)}&avatar=${encodeURIComponent(image)}`;
		console.log(url);
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @param {string} text2 Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async dissapointed(text, text2) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!text2) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `dissapointed?top=${text}&bottom=${text2}`;
		return await getContent(url);
	}

	/**
     * @returns {Buffer} The Processed image Buffer
     */
	async dogs() {
		const url = base + 'dogs';
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @param {string} text2 Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async drake(text, text2) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!text2) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `drake?top=${text}&bottom=${text2}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async facepalm(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `facepalm?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async facts(text) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `facts?text=${text}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async gay(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `gay?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async gun(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `gun?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async hitler(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `hitler?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async invert(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `invert?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async jail(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `jail?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async jokeoverhead(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `jokeoverhead?image=${image}`;
		return await getContent(url);
	}

	/**
     * @returns {Buffer} The Processed image Buffer
     */
	async meme() {
		const url = base + 'meme';
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @param {string} author Author to apprear
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async play_store(text, author, image) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!author) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `play-store?image=${image}&text=${text}&author=${author}`;
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async presentation(text) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `presentation?text=${text}`;
		return await getContent(url);
	}

	/**
     * @returns {Object} The Processed image Buffer
     */
	async random_captcha() {
		const url = await fetch(base + 'random-captcha');
		const data = await url.json();
		return data;
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async rip(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `rip?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async salty(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `salty?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} text Text to apprear
     * @returns {Buffer} The Processed image Buffer
     */
	async scroll(text) {
		if (!text) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		const url = base + `scroll?text=${text}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async shame(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `shame?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @param {string} image2 The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async ship(image, image2) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!image2) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `ship?user=${image}&user2=${image2}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async shit(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `shit?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async simp(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `simp?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @param {string} image2 The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async spank(image, image2) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!image2) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `spank?user=${image}&user2=${image2}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async trash(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `trash?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async triggered(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `triggered?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async wanted(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `wanted?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async wasted(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `wasted?image=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} location Text to apprear
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async weather_card(location, image) {
		if (!location) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `weather-card?location=${location}&background=${image}`;
		return await getContent(url);
	}

	/**
     * @param {string} image The Image URL
     * @returns {Buffer} The Processed image Buffer
     */
	async what(image) {
		if (!image) throw new Error('APIError: Inavlid parameters provided! Docs: https://cool-img-api.js.org');
		if (typeof image !== 'string') throw new Error('image URL should be passed as a STRING');
		const url = base + `what?image=${image}`;
		return await getContent(url);
	}
}

module.exports = API;