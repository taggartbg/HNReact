/** @jsx React.DOM */

//Views
var ListView = require('./listView').ListView;
var PostView = require('./postView').PostView;

var Layout = React.createClass({displayName: 'Layout',

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
			React.DOM.div(null, 
				Header( {url:this.state.contentURL} ),
				ListView( {handleSelectPost:this.handleSelectPost} ),
				PostView( {url:this.state.commentsURL} )
			)
		);
	}
});

var Header = React.createClass({displayName: 'Header',
	render: function() {
		var humanReadableUrl = this.props.url ? this.props.url.substr(0,17) + '...' : '';
		return (
			React.DOM.div( {className:"header"}, 
				" HNReact ",
				
					(this.props.url)
					? React.DOM.span( {className:"link"}, React.DOM.a( {href:this.props.url, target:"_blank"}, humanReadableUrl))
					: ''
				
			)
		)
	}
});

exports.renderApp = function(container) {
	React.renderComponent(
		Layout(null ),
		container
	)
};