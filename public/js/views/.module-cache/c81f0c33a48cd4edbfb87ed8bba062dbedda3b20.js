/** @jsx React.DOM */

//Views
var LoadingIndicator = require('./loading').LoadingIndicator;

var PostView = React.createClass({displayName: 'PostView',
	render: function() {
		var url = this.props.url ? "/Comments.html?url=" + encodeURIComponent(this.props.url) : null;

		return (
			React.DOM.div( {className:"post-view"}, 
				
					(url)
					? React.DOM.iframe( {src:url})
					: ''
				
			)
		)
	}
});

exports.PostView = PostView;