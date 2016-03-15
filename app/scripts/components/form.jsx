var $ = require('jQuery');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var _ = require('underscore');
require('./utlities.js');
require('backbone-react-component');
//local
var models = require('../models/image.js');



var ImageForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  handleSubmit: function(e){
  	e.preventDefault();

    var formData = {
      name: $('#title').val(),
      url: $('#url').val(),
      caption: $('#caption').val()
    };
    console.log(formData);
    this.props.collection.create(formData);
    $('.form-container').slideUp();


  },
  render: function(){

    return (
    	<form role="form">
        <div className="form-group">

          <label htmlFor="title">Image Name:</label>
          <input type="text" className="form-control" id="title" placeholder="Image Title" />
          </div>

        <div className="form-group">
          <label htmlFor="url">URL:</label>
          <input type="text" className="form-control" id="url" placeholder="Image Url"/>
        </div>
        <div className="form-group">
          <label htmlFor="comment">Caption:</label>
          <textarea className="form-control" rows="5" id="caption" placeholder="Image Caption"></textarea>
        </div>
        <div id="input-buttons">
          <button type="submit" className="btn btn-default cancel-btn"> Cancel </button>
          <button type="submit" onClick={this.handleSubmit} className="btn btn-success add-image-btn"><i className="fa fa-file-image-o"></i> Add Image</button>
        </div>

      </form>
    );
  }
});




module.exports = {
	"ImageForm": ImageForm
};





