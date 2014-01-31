/** @jsx React.DOM */

var collection = require('../collection');

var PostView = React.createClass({displayName: 'PostView',
	componentWillReceiveProps: function(nextProps) {
		var _this = this;

		if(nextProps.url) {
			var url = "/Comments.html?url=" + encodeURIComponent(nextProps.url);
		}
	},

	render: function() {
		return (
			React.DOM.div( {className:"post-view"}, 
				
					(this.state.url)
					? React.DOM.iframe( {src:this.state.url})
					: ''
				
			)
		)
	}
});

exports.PostView = PostView;