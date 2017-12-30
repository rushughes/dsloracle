//import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone'
import { createLand } from '../../actions';

class LandCreate extends Component {

  onSubmit = (values) => {
    console.log('onSubmit values', values);
    this.props.createLand(values, this.props.history);
  };

  render() {

    const FILE_FIELD_NAME = 'files';

    const renderDropzoneInput = (field) => {
      const files = field.input.value;
      return (
        <div>
          <Dropzone
            name={field.name}
            onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}
          >
            <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
          {field.meta.touched &&
            field.meta.error &&
            <span className="error">{field.meta.error}</span>}
          {files && Array.isArray(files) && (
            <ul>
              { files.map((file, i) => <li key={i}>{file.name}<img src={file.preview}/></li>) }

            </ul>
          )}
        </div>
      );
    }

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
          <Field name="files" component={renderDropzoneInput} />
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
          <label for="district">Category:</label>
          <Field className="form-control" name="category" id="category" component="select">
            <option value="adventure">adventure</option>
            <option value="arts">arts</option>
            <option value="bars">bars</option>
            <option value="beaches">beaches</option>
            <option value="business">business</option>
            <option value="castles">castles</option>
            <option value="chat">chat</option>
            <option value="cosmic">cosmic</option>
            <option value="cyber">cyber</option>
            <option value="discussions">discussions</option>
            <option value="duranduran">duranduran</option>
            <option value="learning">learning</option>
            <option value="seamless">seamless</option>
            <option value="fashion/animations">fashion/animations</option>
            <option value="fashion/clothing">fashion/clothing</option>
            <option value="fashion/gadgets">fashion/gadgets</option>
            <option value="fashion/shoes">fashion/shoes</option>
            <option value="fashion/skins">fashion/skins</option>
            <option value="fashion/hair">fashion/hair</option>
            <option value="fashion/jewelry">fashion/jewelry</option>
            <option value="fashion/tattoos">fashion/tattoos</option>
            <option value="games/generalgames">games/generalgames</option>
            <option value="games/skillgaming">games/skillgaming</option>
            <option value="howto/freebies">howto/freebies</option>
            <option value="howto/creator">howto/creator</option>
            <option value="howto/newbie">howto/newbie</option>
            <option value="howto/sandbox">howto/sandbox</option>
            <option value="haunted">haunted</option>
            <option value="home/homes">home/homes</option>
            <option value="home/furnishings">home/furnishings</option>
            <option value="home/gardens">home/gardens</option>
            <option value="international/otherlanguages">international/otherlanguages</option>
            <option value="international/turkish">international/turkish</option>
            <option value="international/spanish">international/spanish</option>
            <option value="international/russian">international/russian</option>
            <option value="international/portuguese">international/portuguese</option>
            <option value="international/polish">international/polish</option>
            <option value="international/korean">international/korean</option>
            <option value="international/japanese">international/japanese</option>
            <option value="international/italian">international/italian</option>
            <option value="international/german">international/german</option>
            <option value="international/french">international/french</option>
            <option value="international/arabic">international/arabic</option>
            <option value="land">land</option>
            <option value="gay">gay</option>
            <option value="realms">realms</option>
            <option value="media">media</option>
            <option value="memorial">memorial</option>
            <option value="miscellaneous">miscellaneous</option>
            <option value="music/countryfolk">music/countryfolk</option>
            <option value="music/electronicdance">music/electronicdance</option>
            <option value="music/indiealternative">music/indiealternative</option>
            <option value="music/jazzblues">music/jazzblues</option>
            <option value="music/livemusic">music/livemusic</option>
            <option value="music/popmusic">music/popmusic</option>
            <option value="music/rockmetal">music/rockmetal</option>
            <option value="music/cafes">music/cafes</option>
            <option value="music/hiphopsoulreggae">music/hiphopsoulreggae</option>
            <option value="music/djs">music/djs</option>
            <option value="nature">nature</option>
            <option value="pets">pets</option>
            <option value="photospots">photospots</option>
            <option value="politics">politics</option>
            <option value="popular">popular</option>
            <option value="premium">premium</option>
            <option value="premium/gifts">premium/gifts</option>
            <option value="premium/sandboxes">premium/sandboxes</option>
            <option value="premium/racersgulch">premium/racersgulch</option>
            <option value="premium/flightzones">premium/flightzones</option>
            <option value="premium/hunts">premium/hunts</option>
            <option value="real">real</option>
            <option value="ridesmazes">ridesmazes</option>
            <option value="roleplay/vampire">roleplay/vampire</option>
            <option value="roleplay/steampunk">roleplay/steampunk</option>
            <option value="roleplay/fantasy">roleplay/fantasy</option>
            <option value="roleplay/historical">roleplay/historical</option>
            <option value="roleplay/pirate">roleplay/pirate</option>
            <option value="roleplay/scifi">roleplay/scifi</option>
            <option value="roleplay/urbannoir">roleplay/urbannoir</option>
            <option value="romance/wedding">romance/wedding</option>
            <option value="romance/romance_spots">romance/romance_spots</option>
            <option value="sailing">sailing</option>
            <option value="science">science</option>
            <option value="origins">origins</option>
            <option value="belief">belief</option>
            <option value="sports">sports</option>
            <option value="strange">strange</option>
            <option value="surfing">surfing</option>
            <option value="underwater">underwater</option>
            <option value="wilderness">wilderness</option>
            <option value="zombies">zombies</option>
            <option value="adult/clubs">adult/clubs</option>
            <option value="adult/fashions">adult/fashions</option>
            <option value="adult/roleplaying">adult/roleplaying</option>
            <option value="adult/adult_arts">adult/adult_arts</option>
            <option value="adult/newcomer">adult/newcomer</option>
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
  if (!values['category']) {
    errors['category'] = 'You must provide a category';
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
