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
      <div className="contact-form-container">
        <div className="contact-form">
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
