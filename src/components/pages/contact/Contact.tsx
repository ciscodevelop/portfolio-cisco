import   './contact.scss'
import { Typewriter } from "react-simple-typewriter";
function Contact() {
  return (
    <div className="contact-container" id="about">
      <div className="left">
        <div className="img-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpzmNpCLm-iklm5ZookCj0_vDpptHTH9oEGe7VpjWJTxub73r6jZM9SLz6t9QL8owsVM&usqp=CAU" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Contact Me</h2>
          <h1>
            <Typewriter
              loop={0}
              typeSpeed={190}
              deleteSpeed={90}
              delaySpeed={2500}
              cursor
              words={["Email: ciscodevelop@gmail.com", "Phone: +39 373 82 19 139", "Linkedin: ciscodevelop"]}
            />
          </h1>
          
          <div className="form">
            <div className="input-container">
            <input type="text" placeholder='User Name' />             
            <input type="text" placeholder='Email' />
            </div>
            <textarea  placeholder='Message'></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact