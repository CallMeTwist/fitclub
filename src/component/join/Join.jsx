import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hbo6r5c', 'template_uelxdjl', form.current, 'hW1XRzt9mFTghJEbk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span>Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text">with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email"placeholder="Enter user email" />
            <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
