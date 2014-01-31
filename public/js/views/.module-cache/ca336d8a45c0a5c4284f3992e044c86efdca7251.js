/** @jsx React.DOM */

var PostView = React.createClass({displayName: 'PostView',
	render: function() {
		return (
			React.DOM.div( {className:"post-view"}, 
				" Post View "
			)
		)
	}
});

exports.PostView = PostView;