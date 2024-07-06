
import React from 'react';
import "./formInput.css";

class FormInput extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNo: '',
    country: '',
    city: '',
    panNo: '',
    aadharNo: '',
    formErrors: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      phoneNo: '',
      country: '',
      city: '',
      panNo: '',
      aadharNo: ''
    },
    formValid: false,
    submitted: false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, username, email, password, phoneNo, panNo, aadharNo } = this.state;

    // Validate all fields before submission
    if (firstName.trim() === '') {
      this.handleFormError('firstName', 'First Name is required');
      return;
    }
    if (lastName.trim() === '') {
      this.handleFormError('lastName', 'Last Name is required');
      return;
    }
    if (username.trim() === '') {
      this.handleFormError('username', 'Username is required');
      return;
    }
    if (!this.validateEmail(email)) {
      this.handleFormError('email', 'Invalid email address');
      return;
    }
    if (password.length < 8) {
      this.handleFormError('password', 'Password must be at least 8 characters long');
      return;
    }
    if (!this.validatePhoneNumber(phoneNo)) {
      this.handleFormError('phoneNo', 'Invalid phone number');
      return;
    }
    if (panNo.trim() === '') {
      this.handleFormError('panNo', 'Pan No. is required');
      return;
    }
    if (aadharNo.trim() === '') {
      this.handleFormError('aadharNo', 'Aadhar No. is required');
      return;
    }

    // All fields are valid, proceed with submission
    this.setState({ submitted: true });
  };

  handleFormError = (fieldName, errorMessage) => {
    this.setState((prevState) => ({
      formErrors: {
        ...prevState.formErrors,
        [fieldName]: errorMessage
      }
    }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let { formErrors } = this.state;
    switch (fieldName) {
      case 'firstName':
      case 'lastName':
      case 'username':
      case 'city':
      case 'country':
        formErrors[fieldName] = value.trim() === '' ? 'Required field' : '';
        break;
      case 'email':
        formErrors.email = this.validateEmail(value) ? '' : 'Invalid email address';
        break;
      case 'password':
        formErrors.password = value.length >= 6 ? '' : 'Password must be at least 6 characters long';
        break;
      case 'phoneNo':
        formErrors.phoneNo = this.validatePhoneNumber(value) ? '' : 'Invalid phone number';
        break;
      case 'panNo':
        formErrors.panNo = value.trim() === '' ? 'Required field' : '';
        break;
      case 'aadharNo':
        formErrors.aadharNo = value.trim() === '' ? 'Required field' : '';
        break;
      default:
        break;
    }

    this.setState({
      formErrors,
      formValid: this.validateForm(formErrors)
    });
  }

  validateForm(formErrors) {
    let valid = true;
    Object.values(formErrors).forEach(val => {
      if (val.length > 0) {
        valid = false;
      }
    });
    return valid;
  }

  validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  validatePhoneNumber(phoneNo) {
    return /^\+?[0-9]{1,3}[0-9]{8,}$/.test(phoneNo);
  }

  render() {
    const { submitted, formValid, formErrors } = this.state;

    if (submitted) {
      return (
        <div className="success-message">
          <h2>Registration Successful! Details Saved.</h2>
          <div>
            <p>First Name: {this.state.firstName}</p>
            <p>Last Name:  {this.state.lastName}</p>
            <p>Username:   {this.state.username}</p>
            <p>Email:      {this.state.email}</p>
            <p>Phone No.:  {this.state.phoneNo}</p>
            <p>Country:    {this.state.country}</p>
            <p>City:       {this.state.city}</p>
            <p>Pan No.:    {this.state.panNo}</p>
            <p>Aadhar No.: {this.state.aadharNo}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} noValidate>
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" name="firstName" onChange={this.handleChange} />
            {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input type="text" name="lastName" onChange={this.handleChange} />
            {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
          </div>
          <div className="form-group">
            <label>Username *</label>
            <input type="text" name="username" onChange={this.handleChange} />
            {formErrors.username && <span className="error">{formErrors.username}</span>}
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input type=" email " name="email" onChange={this.handleChange} />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input type="password" name="password" onChange={this.handleChange} />
            {formErrors.password && <span className="error">{formErrors.password}</span>}
          </div>
          <div className="form-group">
            <label>Phone No. *</label>
            <input type=" text " name="phoneNo" onChange={this.handleChange} />
            {formErrors.phoneNo && <span className="error">{formErrors.phoneNo}</span>}
          </div>
          <div className="form-group">
            <label>Country *</label>
            <select name="country" onChange={this.handleChange}>
              <option value=""></option>
              <option value =" country1 ">Country 1</option>
              <option value =" country2 ">Country 2</option>
              <option value =" country3 ">Country 3</option>
            </select>
            {formErrors.country && <span className="error">{formErrors.country}</span>}
          </div>
          <div className="form-group">
            <label>City *</label>
            <select name="city" onChange={this.handleChange}>
              <option value=""></option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3">City 3</option>
            </select>
            {formErrors.city && <span className="error">{formErrors.city}</span>}
          </div>
          <div className="form-group">
            <label>Pan No. *</label>
            <input type="text" name="panNo" onChange={this.handleChange} />
            {formErrors.panNo && <span className="error">{formErrors.panNo}</span>}
          </div>
          <div className="form-group">
            <label>Aadhar No. *</label>
            <input type="text" name="aadharNo" onChange={this.handleChange} />
            {formErrors.aadharNo && <span className="error">{formErrors.aadharNo}</span>}
          </div>
          <button type="submit" disabled={!formValid}>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormInput;
