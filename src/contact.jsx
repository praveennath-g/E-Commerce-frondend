
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./contact.css";

const Contact = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [users, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const data = (e) => {
    setUser({ ...users, [e.target.name]: e.target.value });
  };

  const senddata = async (e) => {
    e.preventDefault();

    const { Name, Email, Subject, Message } = users;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    };

    try {
      const res = await fetch(
        "https://e-commerce-contact-74b59-default-rtdb.firebaseio.com/Message.json",
        options
      );

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setUser({
        Name: "",
        Email: "",
        Subject: "",
        Message: "",
      });

      alert("Your message has been sent successfully.");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred, please try again.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contant">
        <h2># contact us</h2>
        <div className="form">
          <form onSubmit={senddata}>
            <input
              type="text"
              name="Name"
              value={users.Name}
              placeholder="Enter your Full name"
              required
              autoComplete="off"
              onChange={data}
            />
            <input
              type="email"
              name="Email"
              value={users.Email}
              placeholder="Enter your E-mail"
              required
              autoComplete="off"
              onChange={data}
            />
            <input
              type="text"
              name="Subject"
              value={users.Subject}
              placeholder="Enter your subject"
              required
              autoComplete="off"
              onChange={data}
            />
            <textarea
              name="Message"
              value={users.Message}
              placeholder="Your Message"
              required
              autoComplete="off"
              onChange={data}
            ></textarea>
            {isAuthenticated ? (
              <button type="submit">Send</button>
            ) : (
              <button type="button" onClick={loginWithRedirect}>
                Login to Send
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
