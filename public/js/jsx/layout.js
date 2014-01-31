/** @jsx React.DOM */

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