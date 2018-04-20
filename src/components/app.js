/*eslint-disable strict */ // Disabling check because we can't run strict mode. Need global vars.

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
var Footer = require('./common/footer');
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
                <Footer />
            </div>
        );
    }
});

module.exports = App;