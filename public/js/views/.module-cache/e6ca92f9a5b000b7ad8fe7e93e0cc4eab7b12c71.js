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
				React.DOM.div( {className:"score"}, 
					React.DOM.div(null, 
						React.DOM.span( {className:"glyphicon glyphicon-chevron-up"})
					),
					React.DOM.div(null, 
						this.props.post.points
					),
					React.DOM.div(null, 
						React.DOM.span( {className:"glyphicon glyphicon-chevron-down"})
					)
				),
				React.DOM.div( {className:"comments"}, 
					React.DOM.div( {className:"comment-count"}, 
						
							(this.props.post.num_comments > 0)
							? this.props.post.num_comments
							: 0
						
					),
					React.DOM.div( {className:"comment-label"}, 
						" comments "
					)
				),
				React.DOM.span( {className:"title"}, 
					this.props.post.title
				),
				React.DOM.span( {className:"base-domain"}, 
					" (",this.props.post.domain,") "
				),
				React.DOM.br(null ),
				React.DOM.span( {className:"posted"}, 
					" Posted ", this.props.post.published_time, " by ", React.DOM.a( {href:"{this.props.post.submitter_profile}"}, this.props.post.submitter)
				)
			)
		)
	}
})

exports.ListView = ListView;