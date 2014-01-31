/** @jsx React.DOM */

var PostView = React.createClass({
	render: function() {
		var url = this.props.url ? "/Comments.html?url=" + encodeURIComponent(this.props.url) : null;

		return (
			<div className="post-view">
				{
					(url)
					? <iframe src={url}></iframe>
					: ''
				}
			</div>
		)
	}
});

exports.PostView = PostView;