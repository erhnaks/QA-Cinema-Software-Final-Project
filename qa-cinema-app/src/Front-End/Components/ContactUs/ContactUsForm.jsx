import React, { Component } from "react";

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

  render() {
    return (
      <div className="container">
        <form>
          {/* Single name item */}
          <div className="singleItem">
            <label htmlFor="name">Name: </label>
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
            <label htmlFor="surname">Surname: </label>
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
            <label htmlFor="email">E-mail: </label>
            <input
              type="text"
              name="Email"
              placeholder="Your e-mail..."
              className="Email"
              value={this.state.email}
              onChange={this.handleEmail}
            />
          </div>
          {/* End of email item */}

          {/* Single message item */}

          <div className="singleItem">
            <label htmlFor="message">Message: </label>
            <textarea
              name="message"
              placeholder="Your message..."
              id=""
              cols="30"
              rows="10"
              value={this.state.message}
              onChange={this.handleMessage}
            ></textarea>
          </div>
          {/* End of message item */}
          <hr></hr>
          <div className="sent-msg">
            Your message has been sent to our customer service department. One
            of our team member will get back to you as soon as possible.
          </div>
          <hr></hr>

          <div className="btn-form">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
