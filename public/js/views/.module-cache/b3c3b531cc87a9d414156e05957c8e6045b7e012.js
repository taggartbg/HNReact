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
	handleClick: function() {
		console.log("CLICK: ", this.props.post.title);
	},

	render: function() {
		return (
			React.DOM.div( {className:"list-item", onClick:this.handleClick}, 
				this.props.post.title
			)
		)
	}
})

exports.ListView = ListView;