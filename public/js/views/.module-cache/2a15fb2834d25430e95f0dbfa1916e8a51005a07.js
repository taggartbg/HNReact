/** @jsx React.DOM */

var collection = require('../collection');

var PostView = React.createClass({displayName: 'PostView',
	getInitialState: function() {
		return {
			commentMarkup: ''
		};
	},

	componentWillReceiveProps: function(nextProps) {
		var _this = this;

		console.log("UPDATE", nextProps.url);
		if(nextProps.url) {
			collection.getComments(encodeURIComponent(nextProps.url), function(err, res) {
				if(!err) {
					_this.setState({commentMarkup: res})
					console.log("RES: ", res);
				}
			});
		}
	},

	render: function() {
		return (
			React.DOM.div( {className:"post-view"}, 
				this.state.commentMarkup
			)
		)
	}
});

exports.PostView = PostView;