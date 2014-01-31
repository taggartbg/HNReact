/** @jsx React.DOM */

//Models & Collections
var collection = require('../collection');

//Views


var Layout = React.createClass({displayName: 'Layout',

	render: function() {
		return (
			React.DOM.div(null, 
				Header(null ),
				ListView(null ),
				PostView(null )
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

var ListView = React.createClass({displayName: 'ListView',
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
		return (
			React.DOM.div( {className:"list-view"}, 
				
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

var PostView = React.createClass({displayName: 'PostView',
	render: function() {
		return (
			React.DOM.div( {className:"post-view"}, 
				" Post View "
			)
		)
	}
})

exports.renderApp = function(container) {
	React.renderComponent(
		Layout(null ),
		container
	)
};