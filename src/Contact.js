import React from "react";
import SocialButtons from "./SocialButtons";

class Contact extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//www.123formbuilder.com/embed/5470266.js";
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div className="contact-form-container fade-in-slow">
        {" "}
        <div className="contact-form">
          {" "}
          <h5 className="contact-myinfo">
            <a href="mailto:scott.kutler@gmail.com">scott.kutler@gmail.com</a> |{" "}
            <a href="tel:469-387-0895">469.387.0895</a> |{" "}
            <a href="https://maps.google.com/?q=Bethesda,%20Maryland">
              Bethesda, MD, USA
            </a>
          </h5>{" "}
          <script
            type="text/javascript"
            defer
            src="//www.123formbuilder.com/embed/5470266.js"
            data-role="form"
            data-default-width="700px"
            data-defaukt-height="500px"
          ></script>
        </div>
        <SocialButtons></SocialButtons>
      </div>
    );
  }
}

export default Contact;
