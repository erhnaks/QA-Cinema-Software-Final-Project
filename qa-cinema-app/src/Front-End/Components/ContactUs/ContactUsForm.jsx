// import React, { Fragment } from "react";
// import { useState } from "react";
// import "./ContactUs.css";

// const ContactUsForm = () => {
//   const [body, setBody] = useState("");
//   const [subject, setSubject] = useState("");

//   return (
//     <>
//       <h1
//         className="contact-h1
// "
//       >
//         {" "}
//         Contact Us{" "}
//       </h1>
//       <hr></hr>
//       <div className="form-div">
//         <form>
//           <br />

//           <from>
//             <label>Subject: </label>
//             <input
//               type="text"
//               subject="Subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//             />

//             <br />

//             <label>Details:</label>
//             <textarea
//               className="form-details"
//               type="text"
//               body="body"
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//             ></textarea>
//             <br />

//             <div className="send">
//               <a
//                 className="send"
//                 href={`mailto:teamFoxtrot@qa-cinema.com?subject=${subject}&body=${body}`}
//               >
//                 Send
//               </a>
//             </div>
//           </from>
//         </form>
//       </div>
//     </>
//   );
// };

// export default ContactUsForm;

// Email Form

// As a site owner I want an email form for visitors to use so that
// I do not expose my email address on the internet.

// Mandatory Subject: Given the subject is not filled in when the Submit button is clicked,
//  then the user gets a message indicating that the subject is required.

// Email Format: Given the form is completely filled out when the Submit button is clicked,
//  then each field from the email form is included in the resulting email sent to the recipient

// Valid Email Format: Given the user’s email is not in standard email address format when the Submit
// button is clicked, then the user gets a message indicating the email must be in a valid format.

// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "./ContactUs.css";

// const ContactUsForm = () => {
//   return (
//     <>
//       <Form>
//         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//           <Form.Label>Full Name</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Please enter your full name"
//           />
//           <Form.Label>Email address</Form.Label>
//           <Form.Control type="email" placeholder="name@example.com" />
//         </Form.Group>
//         <Form.Label>Subject</Form.Label>
//         <Form.Control type="email" placeholder="Subject" />
//         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//           <Form.Label>Message:</Form.Label>
//           <Form.Control as="textarea" rows={5} />
//         </Form.Group>
//       </Form>
//       <br></br>
//       <Button type="submit">Send</Button>
//     </>
//   );
// };

// export default ContactUsForm;

import React, { Component } from "react";

export default class ContactUsForm extends Component {
  render() {
    return (
      <div className="container">
        <form>
          {/* Single name item */}
          <div className="singleItem"></div>

          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Your name..."
            className="name"
          />
          {/* End of name item */}
        </form>
      </div>
    );
  }
}
