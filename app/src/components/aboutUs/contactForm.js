import React, { Component } from "react";
import axios from "axios";
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
  handelSubmit = async event => {
    event.preventDefault();
    const { fullName, email, number, message, subject } = this.state;
    const emailData = { fullName, email, number, message, subject };
    try {
      const sendEmail = await axios.post(`http://35.195.185.220/email`, emailData);
      if (sendEmail.status === 200) {
        this.setState({
          msg: "Thanks for your message.",
          fullName: "",
          email: "",
          number: "",
          message: "",
          subject: ""
        });
      }
    } catch (err) {
      return {
        err: "Something went wrong, please try again later."
      };
    }
  };
  render() {
    const { fullName, email, number, message, subject, err, msg } = this.state;
    return (
      <div className="content-form-container">
        {err && <p>{err} </p>}
        {msg && <p>{msg} </p>}
        <h1>Contact us</h1>
        <form onSubmit={this.handelSubmit} method="post">
          <div className="form-group">
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full name"
              value={fullName}
              name="fullName"
              id="hearAbout"
              onChange={this.onChange}
              required
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
              required
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
              required
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
              required
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
              required
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
