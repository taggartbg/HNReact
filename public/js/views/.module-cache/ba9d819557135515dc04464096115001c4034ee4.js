/** @jsx React.DOM */

var collection = require('./collection');

var Layout = React.createClass({displayName: 'Layout',
	render: function() {
		return (
			React.DOM.div(null, "TEST")
		);
	}
});

exports.renderApp = function(container) {
	React.renderComponent(
		Layout(null ),
		container
	)
};