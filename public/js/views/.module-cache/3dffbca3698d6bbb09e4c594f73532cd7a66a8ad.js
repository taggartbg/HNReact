/** @jsx React.DOM */

var collection = require('../collection');


var Layout = React.createClass({displayName: 'Layout',
	getInitialState: function() {
		return {
			collection: {}
		}
	},

	componentWillMount: function() {
		this.state.collection.getPosts(42, function(err, res) {
			console.log("ERROR: ", err);
			console.log("POSTS: ", res)
		});
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