module.exports = {
	name: 'add',
	description: 'Adds a Youtuber for the hourly upload check!',
	execute(message, args) {
		message.channel.send(args[0]);
		
	},
};