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