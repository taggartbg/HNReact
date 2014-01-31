var post = new Backbone.Model

var posts = new Backbone.Collection({
	model: post
});

exports.getPosts = function(limit, callback) {
	_.extend(posts, {
		url: (limit ? '/HNify.json?limit=' + limit : '/HNify.json')
	});

	posts.fetch({
		success: function(collection, res) {
			console.log("Fetch successful: ", res)
			callback(null, collection);
		},
		error: function(collection, res) {
			console.log("Fetch unsuccessful: ", res)
			callback(res.statusText, null);
		}
	})
};