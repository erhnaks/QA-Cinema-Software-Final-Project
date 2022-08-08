import React, { Component } from "react";
import axios from "axios";

export default class ContactUsForm extends Component {
  state = {
    name: "",
    surname: "",
    email: "",
    message: "",
    sent: false,
  };

  // handle inputs

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSurname = (e) => {
    this.setState({ surname: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleMessage = (e) => {
    this.setState({ message: e.target.value });
  };

  // End of handle inputs

  // Form Submit function

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      message: this.state.message,
    };

    // Axios Post methods

    axios
      .post("/api/form", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.error("Oppps, Something went wrong. Please try again later");
      });
  };

  // End of Form Submit function

  // Resetting Form function

  resetForm = () => {
    this.setState({
      name: "",
      surname: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  //End of Form Resetting

  render() {
    return (
      <div className="container" id="contact-form">
        <form onSubmit={this.formSubmit}>
          {/* Single name item */}
          <div className="singleItem">
            <label htmlFor="name" id="contact-label">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Your name..."
              className="name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>
          {/* End of name item */}
          {/* Single surname item */}
          <div className="singleItem">
            <label htmlFor="surname" id="contact-label">Surname: </label>
            <input
              type="text"
              name="surname"
              placeholder="Your surname..."
              className="surname"
              value={this.state.surname}
              onChange={this.handleSurname}
            />
          </div>
          {/* End of surname item */}

          {/* Single email item */}
          <div className="singleItem">
            <label htmlFor="email" id="contact-label">E-mail: </label>
            <input
              type="text"
              name="Email"
              placeholder="Your e-mail..."
              className="Email"
              value={this.state.email}
              onChange={this.handleEmail}
              required
            />
          </div>
          {/* End of email item */}

          {/* Single message item */}

          <div className="singleItem">
            <label htmlFor="message" id="contact-label">Message: </label>
            <textarea
              name="message"
              placeholder="Your message..."
              id=""
              cols="30"
              rows="10"
              value={this.state.message}
              onChange={this.handleMessage}
              required
            ></textarea>
          </div>
          {/* End of message item */}
          <hr></hr>
          <div className={this.state.sent ? "msg msgAppear" : "msg"}>
            Your message has been sent to our customer service department. One
            of our team member will get back to you as soon as possible.
          </div>
          <hr></hr>

          <div className="btn-contact-form">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
