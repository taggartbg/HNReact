/** @jsx React.DOM */

var collection = require('../collection');

var Layout = React.createClass({displayName: 'Layout',
	getInitialState: function() {
		return {
			collection: {}
		}
	},

	componentWillMount: function() {
		var _this = this;
		collection.getPosts(10, function(err, res) {
			if(!err) {
				_this.setState({
					collection: res
				});
			}
		});
	},

	render: function() {
		console.log("Collection: ", this.state.collection)
		return (
			React.DOM.div(null, 
				" TEST ",
				
					_.map(this.state.collection, function(post) {
						console.log("POST: ", post);
						return (
							React.DOM.span(null, "test")
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