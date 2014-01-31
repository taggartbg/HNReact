/** @jsx React.DOM */

//Views
var ListView = require('./listView').ListView;
var PostView = require('./postView').PostView;

var Layout = React.createClass({

	getInitialState: function() {
		return {
			commentsURL: '',
			contentURL: ''
		}
	},

	handleSelectPost: function(commentsURL, contentURL) {
		this.setState({
			commentsURL: commentsURL,
			contentURL: contentURL
		});
	},

	render: function() {
		return (
			<div>
				<Header url={this.state.contentURL} />
				<ListView handleSelectPost={this.handleSelectPost} />
				<PostView url={this.state.commentsURL} />
			</div>
		);
	}
});

var Header = React.createClass({
	render: function() {
		var humanReadableUrl = this.props.url ? this.props.url.substr(0,37) + '...' : '';
		return (
			<div className="header">
				HNReact
				{
					(this.props.url)
					? <span className="link"><a href={this.props.url} target="_blank">{humanReadableUrl}</a></span>
					: ''
				}
			</div>
		)
	}
});

exports.renderApp = function(container) {
	React.renderComponent(
		<Layout />,
		container
	)
};