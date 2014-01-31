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

	componentWillMount: function() {
		this.state.collection.getPosts(42, function(err, res) {
			console.log("ERROR: ", err);
			console.log("POSTS: ", res)
		});
	},

	render: function() {
		return (
			React.DOM.div(null, 
				
					this.state.collection.map(function(post) {
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