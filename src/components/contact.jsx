import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { CCardFooter, CCard, CCardImage, CCardBody, CCardText,  CCardTitle, CButton, CRow, CCol , CCardGroup} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

function ContactForm() {
  const [state, handleSubmit] = useForm("xgejyrnw");
  if (state.succeeded) {
      return <p>Thanks for submitting!</p>;
  }
  return (

          <form onSubmit={handleSubmit} name="simple-contact-form" className="contactme"> 
            <label htmlFor="email" className = "labelDiv">
              <h1>Contact me here!</h1>
            </label>
            <div className="nameDiv">
            <input
                  className = "inputName"
                  id="name"
                  type="name"
                  placeholder="Name"
              />
            </div>
            <div className="emailDiv">
              <input
                  className="inputEmail"
                  id="email"
                  type="email" 
                  name="email"
                  placeholder="Email Address"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
            </div>
            <div className="messageDiv">
              <textarea
                    className="inputMessage"
                    id="message"
                    name="message"
                    placeholder="Message"
                  />
                  <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            <div className="buttonDiv">
              <button type="submit" disabled={state.submitting} className="contactSubmit">
                Submit
              </button>
            </div>
        </form>
  );
}

export default function Contact() {
  return (
    <ContactForm />
  )
  
}

