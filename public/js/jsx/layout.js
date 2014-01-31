/** @jsx React.DOM */

var collection = require('../collection');

var callback = function(err, res) {
	console.log("ERROR: ", err);
	console.log("POSTS: ", res)
};

collection.getPosts(42, callback);

var Layout = React.createClass({
	render: function() {
		return (
			<div>TEST</div>
		);
	}
});

exports.renderApp = function(container) {
	React.renderComponent(
		<Layout />,
		container
	)
};