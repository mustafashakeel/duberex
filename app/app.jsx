var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Duberex = require('Duberex');
var About = require('About');
var Contact = require('Contact');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <IndexRoute component={Duberex}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
