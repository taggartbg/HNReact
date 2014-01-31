/** @jsx React.DOM */

var LoadingIndicator = React.createClass({displayName: 'LoadingIndicator',
	render: function() {
		return (
			React.DOM.div( {className:"loading"}, 
				React.DOM.div(null),
				React.DOM.div(null),
				React.DOM.div(null),
				React.DOM.div(null)
			)
		)
	}
});

exports.LoadingIndicator = LoadingIndicator;