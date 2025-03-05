import { useState } from "react";
import "./ContactForm.css"; 

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Message:", message);
  };

  return (
    <div className="form-container">
      <h2 className="title">
        <span className="circle"></span> CONTACT US
      </h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />

        <label>Message</label>
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          required
        ></textarea>

        <button type="submit">
          Send <span className="arrow">➤</span>
        </button>
      </form>
    </div>
  );
}
