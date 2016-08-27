// Requiring the 'Twit' package.
var Twit = require('twit')

// Requiring the token object, stored on config.js.
var config = require('./config')
var T = new Twit(config)

// Setting up a user stream.
var stream = T.stream('user')

// Anytime someone mentions me:
var stream = stream.on('tweet', tweetEvent)

function tweetEvent(event) {
	// Metadata, where you can find informations about the person who replied.
	// var fs = require('fs')
	// var json = JSON.stringify(event, null, 2)
	// fs.writeFile("tweet.json", json)

	var replyTo = event.in_reply_to_screen_name
	var text  = event.text
	var from = event.user.screen_name

	console.log(replyTo + ' ' + from)

	// If the reply was sent to your acount '...', reply it.
	if (replyTo === '...') {
		var newTweet = '@' + from + ', ...' // <= Insert your reply here!
		tweetIt(newTweet)
	}
}

//  Tweet 'hello world!'
function tweetIt(txt) {
	var r = Math.random() * 100
	var tweet = {
		status: txt,
	}

	T.post('statuses/update', tweet, tweeted)

	function tweeted(err, data, response) {
		if (err) {
			console.log("Something went wrong!")
		} else {
			console.log("All good!")
		}
	}
}

