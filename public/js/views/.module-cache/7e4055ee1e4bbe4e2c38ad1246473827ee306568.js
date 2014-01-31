/** @jsx React.DOM */

var collection = require('../collection');

var PostView = React.createClass({displayName: 'PostView',
	render: function() {
		if(this.props.url) {
			collection.getComments(encodeURIComponent(this.props.url), function(err, res) {
				if(!err) {
					console.log("Comments: ", res);
				}
			});
		}
		return (
			React.DOM.div( {className:"post-view"}, 
				
					(this.props.url)
					?	React.DOM.iframe( {src:this.props.url})
					: ''
				
			)
		)
	}
});

exports.PostView = PostView;