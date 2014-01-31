/** @jsx React.DOM */

//Views
var ListView = require('./listView').ListView;

var Layout = React.createClass({displayName: 'Layout',

	render: function() {
		return (
			React.DOM.div(null, 
				Header(null ),
				ListView(null ),
				PostView(null )
			)
		);
	}
});

var Header = React.createClass({displayName: 'Header',
	render: function() {
		return (
			React.DOM.div( {className:"header"}, 
				" HNReact "
			)
		)
	}
});

var PostView = React.createClass({displayName: 'PostView',
	render: function() {
		return (
			React.DOM.div( {className:"post-view"}, 
				" Post View "
			)
		)
	}
})

exports.renderApp = function(container) {
	React.renderComponent(
		Layout(null ),
		container
	)
};