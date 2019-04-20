import React, { Component } from "react";
// import mailer from '../mailer';
class ContactForm extends Component {
  state = {
    fullName: "",
    email: "",
    number: "",
    message: "",
    subject: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handelSubmit = event => {
    event.preventDefault();
    // const { fullName, email, number, message, subject } = this.state;
    // const emailData = { fullName, email, number, message, subject }
    // mailer(emailData)
  };
  render() {
    const { fullName, email, number, message, subject } = this.state;
    return (
      <div className="content-form-container">
        <h1>Contact us</h1>
        <form>
          <div className="form-group">
            <label htmlFor="fullName" onClick={this.handelSubmit}>
              Full name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              value={fullName}
              name="fullName"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Example@example.example"
              name="email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="+44 9876543"
              name="number"
              value={number}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Message "
              name="message"
              value={message}
              onChange={this.onChange}
            />
          </div>
          <button className="btn contact-submit-btn" type="submit">
            Submit form
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
