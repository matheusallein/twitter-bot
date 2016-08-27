// When someone follows you, that person will receive a tweet from the bot.
stream.on('follow', followed)

function followed(event) {
	var name = event.source.name
	var screenName = event.source.screen_name
	tweetIt('.@' + screenName + ' ...') // <= Insert your reply here!
}