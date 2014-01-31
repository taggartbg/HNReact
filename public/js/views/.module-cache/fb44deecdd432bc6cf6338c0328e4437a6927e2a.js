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
		return (
			React.DOM.div(null, 
				
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