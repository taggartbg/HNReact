/** @jsx React.DOM */

var collection = require('../collection');

var Layout = React.createClass({displayName: 'Layout',

	render: function() {
		console.log("Collection: ", this.state.collection)
		return (
			React.DOM.div(null, 
				Header(null ),
				
					_.map(this.state.collection, function(post) {
						return (
							React.DOM.div(null, 
								post.title
							)
						)
					})
				
			)
		);
	}
});

var Header = React.createClass({displayName: 'Header',
	render: function() {
		return (
			React.DOM.div( {className:"header"}, 
				" HNReact "
			)
		)
	}
});

var PostView = React.createClass({displayName: 'PostView',
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
				
					_.map(this.state.collection, function(post) {
						return (
							React.DOM.div(null, 
								post.title
							)
						)
					})
				
			)
		);
	}

})

exports.renderApp = function(container) {
	React.renderComponent(
		Layout(null ),
		container
	)
};