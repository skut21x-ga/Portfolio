import React from "react";

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
        <div className="contact-form">
          <h5 className="contact-myinfo">
            scott.kutler@gmail.com | 469.387.0895 | Bethesda, MD 20814
          </h5>
          <script
            type="text/javascript"
            defer
            src="//www.123formbuilder.com/embed/5470266.js"
            data-role="form"
            data-default-width="700px"
          ></script>
        </div>
      </div>
    );
  }
}

export default Contact;
