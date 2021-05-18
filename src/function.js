const fetch = require('node-fetch');

module.exports = {
	getContent: async function(url) {
		try {
			const res = await fetch(url);
			return res.headers.get('content-type') === 'application/json' ? await res.json() : await res.buffer();
		} catch (e) {
			return `Error: ${e}`;
		}
	},
};