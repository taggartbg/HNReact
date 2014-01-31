/** @jsx React.DOM */

//Models & Collections
var collection = require('../collection');

//Views
var LoadingIndicator = require('./loading').LoadingIndicator;

var ListView = React.createClass({
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
    		_this.setState({
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
			<div className="list-view">
				{
					_.map(this.state.collection, function(model) {
						return (
							<ListItem post={model} handleSelectPost={_this.props.handleSelectPost} />
						)
					})
				}
				<div className="loading-container">
				{
					(this.state.loading)
					? <LoadingIndicator />
					: ''
				}
				</div>
			</div>
		);
	}
});

var ListItem = React.createClass({

	handleClick: function() {
		this.props.handleSelectPost(this.props.post.comments_link, this.props.post.link);
	},

	render: function() {
		return (
			<div className="list-item" onClick={this.handleClick}>
				<div className="score">
					<div>
						<span className="glyphicon glyphicon-chevron-up"></span>
					</div>
					<div>
						{this.props.post.points}
					</div>
					<div>
						<span className="glyphicon glyphicon-chevron-down"></span>
					</div>
				</div>
				<div className="comments">
					<div className="comment-count">
						{
							(this.props.post.num_comments > 0)
							? this.props.post.num_comments
							: 0
						}
					</div>
					<div className="comment-label">
						comments
					</div>
				</div>
				<span className="title">
					{this.props.post.title}
				</span>
				<span className="base-domain">
					({this.props.post.domain})
				</span>
				<br />
				<span className="posted">
					Posted {this.props.post.published_time} by <a target="_blank" href={this.props.post.submitter_profile}>{this.props.post.submitter}</a>
				</span>
			</div>
		)
	}
});

exports.ListView = ListView;