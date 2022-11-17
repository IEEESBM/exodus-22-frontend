import React from 'react'

const ProfileForm = () => {
  return (
    <div className="profile-b">
      <form className='profile-b-form'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
      <p className="user-detail-label">Name</p>
      <input type="text" className="user-detail-input" spellCheck="false"/>
      <div className="user-detail-line"></div>
      <p className="user-detail-label">Phone Number</p>
      <input type="text" className="user-detail-input" spellCheck="false"/>
      <div className="user-detail-line"></div>
      <p className="user-detail-label">Email</p>
      <input type="email" className="user-detail-input" spellCheck="false"/>
      <div className="user-detail-line"></div>
      <p className="user-detail-label">Password</p>
      <input type="password" className="user-detail-input" spellCheck="false"/>
      <div className="user-detail-line"></div>
      <div className="profile-edit-button-div">
        <button className="profile-edit-button"><span className="profile-edit-button-text">EDIT</span></button>
        <button className="profile-edit-button"><span className="profile-edit-button-text">SAVE</span></button>
      </div>
      </form>
    </div>
  )
}

export default ProfileForm