/** @jsx React.DOM */

var collection = require('../collection');

var PostView = React.createClass({displayName: 'PostView',
	componentWillReceiveProps: function(nextProps) {
		var _this = this;

		if(nextProps.url) {
			
			this.setState
		}
	},

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