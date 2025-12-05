import React, { useState } from "react";
import { FaPaperPlane, FaCopy, FaCheck } from "react-icons/fa";

function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [copied, setCopied] = useState(false);
  const [response, setResponse] = useState(null);

  const apiEndpoint = "https://api.yourportfolio.com/contact";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API response
    setResponse({
      status: 200,
      statusText: "OK",
      time: "245ms",
      size: "156 B"
    });
    console.log("Message sent:", { name, email, message });
  };

  const handleCopy = () => {
    const jsonData = JSON.stringify({ name, email, message }, null, 2);
    navigator.clipboard.writeText(jsonData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const jsonBody = `{
  "name": "${name}",
  "email": "${email}",
  "message": "${message}"
}`;

  return (
    <section className="contact">
      <h1 className="glow">API Contact</h1>
      <p className="contact-subtitle">
        Send me a message using this developer-friendly interface
      </p>
      
      <div className="postman-container">
        {/* Request Section */}
        <div className="postman-request">
          <div className="request-header">
            <div className="request-method">
              <span className="method-badge">POST</span>
              <input 
                type="text" 
                className="url-input" 
                value={apiEndpoint}
                readOnly
              />
            </div>
            <button 
              type="submit" 
              className="send-btn"
              onClick={handleSubmit}
            >
              <span>Send</span>
              <FaPaperPlane />
            </button>
          </div>

          <div className="request-tabs">
            <div className="tab active">Body</div>
            <div className="tab">Headers</div>
            <div className="tab">Authorization</div>
          </div>

          <div className="body-type">
            <label className="radio-label">
              <input type="radio" name="bodyType" checked readOnly />
              <span>JSON</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="bodyType" disabled />
              <span>Form Data</span>
            </label>
            <label className="radio-label">
              <input type="radio" name="bodyType" disabled />
              <span>Raw</span>
            </label>
          </div>

          <div className="json-editor">
            <div className="editor-header">
              <span className="editor-title">Request Body</span>
              <button className="copy-btn" onClick={handleCopy}>
                {copied ? <FaCheck /> : <FaCopy />}
                <span>{copied ? "Copied!" : "Copy"}</span>
              </button>
            </div>
            <div className="json-content">
              <pre>
                <code>
                  <span className="json-bracket">{'{'}</span>
                  {'\n  '}
                  <div className="json-field">
                    <span className="json-key" data-field="name">"name"</span>
                    <span className="json-colon">: </span>
                    <span className="json-string">"</span>
                    <input
                      type="text"
                      className="json-input"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={(e) => e.target.parentElement.querySelector('.json-key').classList.add('focused')}
                      onBlur={(e) => e.target.parentElement.querySelector('.json-key').classList.remove('focused')}
                      placeholder="Your Name"
                    />
                    <span className="json-string">",</span>
                  </div>
                  {'\n  '}
                  <div className="json-field">
                    <span className="json-key" data-field="email">"email"</span>
                    <span className="json-colon">: </span>
                    <span className="json-string">"</span>
                    <input
                      type="email"
                      className="json-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={(e) => e.target.parentElement.querySelector('.json-key').classList.add('focused')}
                      onBlur={(e) => e.target.parentElement.querySelector('.json-key').classList.remove('focused')}
                      placeholder="your@email.com"
                    />
                    <span className="json-string">",</span>
                  </div>
                  {'\n  '}
                  <div className="json-field">
                    <span className="json-key" data-field="message">"message"</span>
                    <span className="json-colon">: </span>
                    <span className="json-string">"</span>
                    <textarea
                      className="json-textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onFocus={(e) => e.target.parentElement.querySelector('.json-key').classList.add('focused')}
                      onBlur={(e) => e.target.parentElement.querySelector('.json-key').classList.remove('focused')}
                      placeholder="Your message here..."
                      rows="4"
                    />
                    <span className="json-string">"</span>
                  </div>
                  {'\n'}
                  <span className="json-bracket">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Response Section */}
        {response && (
          <div className="postman-response">
            <div className="response-header">
              <div className="response-status">
                <span className="status-badge success">
                  {response.status} {response.statusText}
                </span>
                <span className="response-time">{response.time}</span>
                <span className="response-size">{response.size}</span>
              </div>
            </div>
            <div className="response-tabs">
              <div className="tab active">Body</div>
              <div className="tab">Headers</div>
            </div>
            <div className="response-body">
              <pre>
                <code>
                  <span className="json-bracket">{'{'}</span>
                  {'\n  '}
                  <span className="json-key">"success"</span>
                  <span className="json-colon">: </span>
                  <span className="json-boolean">true</span>
                  <span className="json-comma">,</span>
                  {'\n  '}
                  <span className="json-key">"message"</span>
                  <span className="json-colon">: </span>
                  <span className="json-string">"Message sent successfully!"</span>
                  {'\n'}
                  <span className="json-bracket">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
