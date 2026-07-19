import { useState } from "react";

function Contact() {

  const [message, setMessage] = useState("");

  const [showHelp, setShowHelp] = useState(false);

  return (

    <div className="container">

      <div className="card">

        <h1>📞 Contact Me</h1>

        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />

        <h3>Your Message</h3>

        <p>{message}</p>

        <p>Character Count : {message.length}</p>

        <button onClick={()=>setShowHelp(!showHelp)}>

          {showHelp ? "Hide Help" : "Show Help"}

        </button>

        {showHelp &&

        <p style={{marginTop:"20px"}}>

          Type your message above. It updates instantly using React useState.

        </p>

        }

      </div>

    </div>

  );

}

export default Contact;