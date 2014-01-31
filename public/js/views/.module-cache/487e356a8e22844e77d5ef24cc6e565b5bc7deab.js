/** @jsx React.DOM */

//Models & Collections
var collection = require('../collection');

//Views
var LoadingIndicator = require('./loading').LoadingIndicator;

//Addons
var ClassSet = React.addons.classSet;
console.log("CS: ", new ClassSet);

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
			var limit = collection.getLimit();
    	var loadPoint = ((110 * limit+1) - $(window).height());

    	var callback = function(err, res) {
  			if(!err) {
					_this.setState({
						collection: res,
						loading: false
					});
				}
  		};

    	if($(node).scrollTop() > loadPoint) {
    		_this.setState({
    			loading: true
    		})
    		collection.setLimit(limit + 10);
    		collection.fetchPosts(callback)
    	};
  	});
	},

	handleSelectPost: function(commentsUrl, contentUrl, rank) {
		this.props.handleSelectPost(commentsUrl, contentUrl);
		this.setState({
			activeItem: rank
		})
	},

	render: function() {
		var _this = this;

		return (
			React.DOM.div( {className:"list-view"}, 
				
					_.map(this.state.collection, function(model) {
						return (
							ListItem( {post:model, handleSelectPost:_this.props.handleSelectPost, isActive:_this.state.activeItem === model.rank} )
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

	handleClick: function(evt) {
		this.props.handleSelectPost(this.props.post.comments_link, this.props.post.link, this.props.post.rank);
	},

	render: function() {

		itemClasses = new ClassSet({
			'list-item': true,
			'active': false
		});

		console.log(itemClasses);

		return (
			React.DOM.div( {className:itemClasses, name:this.props.post.rank, onClick:this.handleClick}, 
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

exports.ListView = ListView;