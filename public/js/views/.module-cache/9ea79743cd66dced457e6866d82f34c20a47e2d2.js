/** @jsx React.DOM */

var collection = require('../collection');

var PostView = React.createClass({displayName: 'PostView',
	getInitialState: function() {
		return {
			commentMarkup: ''
		};
	},

	componentWillMount: function() {
		if(this.props.url) {
			collection.getComments(encodeURIComponent(this.props.url), function(err, res) {
				if(!err) {
					this.setState({commentMarkup: res})
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