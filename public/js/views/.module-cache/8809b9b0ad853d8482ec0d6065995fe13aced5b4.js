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

		collection.fetchPosts(function(err, res) {
			if(!err) {
				_this.setState({
					collection: res
				});
			}
		});
	},

	componentDidMount: function(node) {
		var _this = this;

		$(node).scroll(function() {
    	console.log($(node).scrollTop());

    	var limit = collection.getLimit();
    	var loadPoint = ((110 * limit) - $(window).height());

    	var callback = function(err, res) {
  			if(!err) {
					_this.setState({
						collection: res,
						loading: false
					});
				}
  		};

    	if($(node).scrollTop() > loadPoint) {
    		this.setState({
    			loading: true
    		})
    		collection.setLimit(limit + 10);
    		collection.fetchPosts(callback)
    	};
  	});
	},

	render: function() {
		var _this = this;

		return (
			React.DOM.div( {className:"list-view"}, 
				
					_.map(this.state.collection, function(model) {
						return (
							ListItem( {post:model, handleSelectPost:_this.props.handleSelectPost} )
						)
					}),
				
				React.DOM.div( {className:"loading-container"}, 
				
					(this.state.loading)
					? LoadingIndicator(null )
					: ''
				
				)
			)
		);
	}
});

var ListItem = React.createClass({displayName: 'ListItem',

	handleClick: function() {
		this.props.handleSelectPost(this.props.post.comments_link);
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
					" Posted ", this.props.post.published_time, " by ", React.DOM.a( {target:"_blank", href:this.props.post.submitter_profile}, this.props.post.submitter)
				)
			)
		)
	}
});

var LoadingIndicator = React.createClass({displayName: 'LoadingIndicator',
	render: function() {
		return (
			React.DOM.div( {className:"loading"}, 
				React.DOM.div(null),
				React.DOM.div(null),
				React.DOM.div(null),
				React.DOM.div(null)
			)
		)
	}
});

exports.ListView = ListView;