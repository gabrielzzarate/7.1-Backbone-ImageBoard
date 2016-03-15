var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone-react-component');

var NavComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  showForm: function(){
    $('.form-container').slideToggle();
  },
  render: function() {
      return (
        <div className="container">
          <button onClick={this.showForm} className="btn btn-default pull-right nav-button"><i className="fa fa-plus"></i></button>
        </div>

      );
  }
});


module.exports = {
  "NavComponent": NavComponent
};
