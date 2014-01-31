/** @jsx React.DOM */

var collection = require('../collection');

collection.getPosts(42, function(err, res) {
	console.log("ERROR: ", err);
	console.log("POSTS: ", res)
});

var Layout = React.createClass({displayName: 'Layout',
	getInitialState: function() {
		collection: collection
	},

	render: function() {
		console.log("Collection: ", collection)
		return (
			React.DOM.div(null, 
				
					collection.map(function(post) {
						return (
							React.DOM.div(null, 
								post.get('title')
							)
						)
					})
				
			)
		);
	}
});

exports.renderApp = function(container) {
	React.renderComponent(
		Layout(null ),
		container
	)
};

/*

	c

	componentWillMount: function() {
		this.state.collection.getPosts(42, function(err, res) {
			console.log("ERROR: ", err);
			console.log("POSTS: ", res)
		});
	},
	*/