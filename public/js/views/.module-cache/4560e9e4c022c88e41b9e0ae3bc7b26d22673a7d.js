/** @jsx React.DOM */

var Layout = React.createClass({displayName: 'Layout',
	render: function() {
		return (
			React.DOM.div(null, "TEST")
		);
	}
});

exports.Layout = function() {
	Layout(null )
};