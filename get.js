// It will get tweets with a determined string, attached to it. In this case, 'robot'.
var params = {
	q: '...', // Search for '...' a specific thing.
	count: 200
}

T.get('search/tweets', params, gotData)

function gotData(err, data, response) {
	var tweets = data.statuses
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text)
	}
}