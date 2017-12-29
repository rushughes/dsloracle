import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createLand } from '../../actions';

class LandCreate extends Component {

  onSubmit = (values) => {
    console.log('onSubmit values', values);
    this.props.createLand(values, this.props.history);
  };

  render() {
    return (
      <div>
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <div className="form-group">
          <label for="Title">Title:</label>
          <input type="text" class="form-control" id="title"/>
        </div>
        <div className="form-group">
          <label for="x">X:</label>
          <input type="text" class="form-control" id="x"/>
        </div>
        <div className="form-group">
          <label for="y">Y:</label>
          <input type="text" class="form-control" id="y"/>
        </div>
        <div class="form-group">
          <label for="district">District:</label>
          <select class="form-control" id="district">
            <option>Genesis City</option>
            <option>SUREAL District</option>
            <option>Dragon City</option>
            <option>AETHERIAN Project</option>
            <option>Decentraland Museum</option>
            <option>Virtual Sand Hill Road</option>
            <option>Vegas City</option>
            <option>Fashion Street</option>
            <option>Red Light District</option>
          </select>
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea class="form-control" rows="5" id="description"></textarea>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" value="adult"/>Adult</label>
        </div>
        <Link to="/" className="btn btn-cancel">Cancel</Link>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values['title']) {
    errors['title'] = 'You must provide a title';
  }
  if (!values['x']) {
    errors['x'] = 'You must provide a x';
  }
  if (!values['y']) {
    errors['y'] = 'You must provide a y';
  }
  if (!values['district']) {
    errors['district'] = 'You must provide a district';
  }
  if (!values['description']) {
    errors['description'] = 'You must provide a description';
  }

  console.log('errors', errors);

  return errors;
}

export default connect(null, { createLand })(reduxForm({
  validate,
  form: 'landCreateForm',
  destroyOnUnmount: false,
})(withRouter(LandCreate)));
