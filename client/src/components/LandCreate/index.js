//import _ from 'lodash';
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
          <Field
            component="input" type="text"
            className="form-control" name="title" id="title"
            placeholder="Amazing wooden horse"/>
        </div>
        <div className="form-group">
          <label for="x">X:</label>
          <Field component="input" type="text"
            className="form-control" name="x" id="x" placeholder="18"/>
        </div>
        <div className="form-group">
          <label for="y">Y:</label>
          <Field component="input" type="text"
            className="form-control" name="y" id="y" placeholder="-12"/>
        </div>
        <div className="form-group">
          <label for="district">District:</label>
          <Field className="form-control" name="district" id="district" component="select">
            <option>Genesis City</option>
            <option>SUREAL District</option>
            <option>Dragon City</option>
            <option>AETHERIAN Project</option>
            <option>Decentraland Museum</option>
            <option>Virtual Sand Hill Road</option>
            <option>Vegas City</option>
            <option>Fashion Street</option>
            <option>Red Light District</option>
          </Field>
        </div>
        <div className="form-group">
          <label for="description">Description:</label>
          <Field
            className="form-control" rows="5" name="description" id="description" component="textarea"/>
        </div>
        <div className="checkbox">
          <label>
            <Field type="checkbox" value="adult" name="adult" id="adult" component="input" />
            Adult
          </label>
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
