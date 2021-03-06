/** @jsx React.DOM */

//Models & Collections
var collection = require('../collection');

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
				
					_.map(this.state.collection, function(model) {
						return (
							ListItem( {post:model} )
						)
					})
				
			)
		);
	}
});

var ListItem = React.createClass({displayName: 'ListItem',
	render: function() {
		return (
			React.DOM.div( {className:"list-item"}, 
				this.props.post.title
			)
		)
	}
})

exports.ListView = ListView;