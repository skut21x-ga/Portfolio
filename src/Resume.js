import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <div className="resume-page">
        <br></br>
        <div className="full-resume-container">
          <iframe
            className="full-resume-content"
            src="https://docs.google.com/document/d/e/2PACX-1vTE8R3-TxsBTkFFZWSgknXhbybqLFWuE4fs-Iqi_MGr2FOvKosnC1EOIM8cXLwgdo6lu283zP5MdzJA/pub?embedded=true"
          ></iframe>
        </div>
        <a href="https://github.com/skut21x-ga/portfolio/raw/master/src/assets/ScottKutler-SoftwareEngineerResume.pdf">
          <div className="full-resume-button">
            <h5 className="resume-download-bottom">Download Resume (PDF)</h5>
          </div>
        </a>
      </div>
    );
  }
}
export default Resume;
