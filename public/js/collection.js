var post = new Backbone.Model;

var posts = new Backbone.Collection({
	model: post
});

var limit = 10;

exports.fetchPosts = function(callback) {
	_.extend(posts, {
		url: (limit ? '/HNify.json?limit=' + limit : '/HNify.json')
	});

	posts.fetch({
		success: function(collection, res) {
			console.log("Fetch successful: ", res)
			callback(null, res);
		},
		error: function(collection, res) {
			console.log("Fetch unsuccessful: ", res)
			callback(res.statusText, null);
		}
	})
};

exports.getJSON = function() {
	return posts.toJSON();
};

exports.getLimit = function() {
	return limit;
};

exports.setLimit = function(newLimit) {
	limit = newLimit;
};