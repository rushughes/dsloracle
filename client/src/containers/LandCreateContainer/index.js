import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import LandCreate from '../../components/LandCreate';

class LandCreateContainer extends Component {

  render() {
    return <LandCreate />;
  }
}

export default reduxForm({ form: 'landCreateForm' })(LandCreateContainer);
