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
		console.log("Collection: ", this.state.collection)
		return (
			React.DOM.div(null, 
				" TEST "
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