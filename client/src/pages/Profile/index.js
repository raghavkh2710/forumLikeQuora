import React, { useEffect } from "react";
import "./styled.css";

const Profile = () => {
  return (
    <div class="profile-card">
      <div class="card-header">
        <div class="pic">
          <img src="https://i.ibb.co/5vwtCGH/pic.png" alt="" />
        </div>
        <div class="name">Rk</div>
        <div class="desc">Email ID</div>
        <div class="sm">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-github"></a>
          <a href="#" class="fab fa-youtube"></a>
        </div>
        <a href="#" class="contact-btn">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Profile;
