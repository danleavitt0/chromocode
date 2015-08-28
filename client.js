var React = require('react');

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var App = require('components/app.jsx');
var Home = require('components/home.jsx');

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home}/>
  </Route>
);



document.addEventListener("DOMContentLoaded", function(event) {
  Router.run(routes, Router.HistoryLocation, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
  });
});
