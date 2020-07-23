const request = require('request');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	name: 'add',
	description: 'Adds a Youtuber for the hourly upload check!',
	execute(message, args) {
		message.channel.send(args[0]);

		request('https://www.googleapis.com/youtube/v3/activities?part=snippet&channelId='+args[0]+'&key='+process.env.YOUTUBE_KEY, { json: true }, (err, res, body) => {
			if (err) { return console.log(err); }
			
			for(let item of body.items) {
				// Gets the title and the maxres url from Youtube API
				message.channel.send(item.snippet.title);
				message.channel.send(item.snippet.thumbnails.maxres.url);
			}
		});
	},
};