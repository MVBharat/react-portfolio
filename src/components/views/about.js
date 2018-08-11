import React, { Component } from "react";
import profileImg from "../../../static/assets/images/about/profile.jpg";

export default class About extends Component {
  render() {
    return (
      <div className="content-wrapper">
        <div className="two-column-wrapper">
          <div className="profile-image-wrapper">
            <img src={profileImg} alt="Profile Image" />
          </div>

          <div className="profile-content-wrapper">
            <h1>Hi, thanks for visiting my site.</h1>
            <p>
              With over a decade of development experience in a number of
              industries I realized that the typical product creation process
              between clients and developers was flawed. All too often
              developers rarely communicate to clients throughout the
              development stage, resulting in a final product that fails to
              reach the goal sought by the customer and end user.
            </p>

            <p>
              For this reason I decided to utilize a completely different
              development pattern that focuses on highly focused communication
              and transparent design patterns. When I take on a project not only
              do I work to craft the application according to the client's
              specifications, I give daily updates to ensure that the project is
              aligning properly with the client's goals. The end result is the
              right product, delivered on time, and on budget.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
