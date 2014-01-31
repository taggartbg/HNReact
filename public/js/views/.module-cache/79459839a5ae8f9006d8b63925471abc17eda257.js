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

		
	},

	render: function() {
		var url = (this.props.url) ? "/Comments.html?url=" + encodeURIComponent(this.props.url) : '';
		return (
			React.DOM.div( {className:"post-view"}, 
				React.DOM.iframe( {src:url})
			)
		)
	}
});

exports.PostView = PostView;