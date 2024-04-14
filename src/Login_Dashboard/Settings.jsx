import React from 'react';
import upload_icon from "./images/upload_icon.png"

export default function Settings() {
  return (
    <>
      <div className="main">
        <h4>Account Setting</h4>
        <hr />
        <h5>Your Profile Picture</h5>
        <input type="image" src={upload_icon} />
        <hr />
        <div className="name_mail">
          <div class="div_1">
            <label for="" class="form-label">Full Name</label>
            <input type="text" class="form-control" placeholder="Please enter your full name" />
          </div>
          <div class="div_1">
            <label for="" class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Please enter your email" />
          </div>
        </div>
        <div className="name_mail">
          <div class="div_1">
            <label for="" class="form-label">Username</label>
            <input type="text" class="form-control" placeholder="Please enter your username" />
          </div>
          <div class="div_1">
            <label for="" class="form-label">Phone number</label>
            <input type="email" class="form-control" placeholder="Please enter your phone number" />
          </div>
        </div>
        <div className='buttons'>
          <button id='btn1'>Update Profile</button>
          <button id='btn2'>Reset</button>
        </div>

      </div>
    </>
  )
}
