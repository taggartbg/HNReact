/** @jsx React.DOM */

var PostView = React.createClass({displayName: 'PostView',
	render: function() {
		return (
			React.DOM.div( {className:"post-view"}, 
				React.DOM.iframe( {src:this.props.url})
			)
		)
	}
});

exports.PostView = PostView;