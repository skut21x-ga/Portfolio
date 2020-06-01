// import React from "react";
// import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
// import { SocialIcon } from "react-social-icons";

// const SocialButtons = () => {
//   return (
//     <MDBContainer color="primary" rounded>
//       <MDBBtn color="primary" rounded>
//         <SocialIcon url="https://www.linkedin.com/in/scottkutler/" />
//       </MDBBtn>
//       <MDBBtn>
//         <SocialIcon url="https://www.facebook.com/scottkutler" />
//       </MDBBtn>
//       <MDBBtn>
//         <SocialIcon url="https://www.github.com/skut21x-gascottkutler" />
//       </MDBBtn>
//     </MDBContainer>
//   );
// };

// export default SocialButtons;

import React from "react";
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact";
import { SocialIcon } from "react-social-icons";

const SocialButtons = () => {
  return (
    <div className="Social-container">
      <div className="Social-box">
        <SocialIcon url="https://www.linkedin.com/in/scottkutler/" />
      </div>

      <div className="Social-box">
        <SocialIcon url="https://www.facebook.com/scottkutler" />
      </div>
      <div className="Social-box">
        <SocialIcon url="https://www.github.com/skut21x-ga" />
      </div>
    </div>
  );
};

export default SocialButtons;
