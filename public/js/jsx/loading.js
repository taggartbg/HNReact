/** @jsx React.DOM */

var LoadingIndicator = React.createClass({
	render: function() {
		return (
			<div className="loading">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		)
	}
});

exports.LoadingIndicator = LoadingIndicator;