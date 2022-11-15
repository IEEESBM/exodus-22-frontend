import React from 'react'
import userImage from './dashboard-profile.svg'

const UserProfile = () => {
  return (
    <div className="profile-a">
        <h1 className='heading'>User Dashboard</h1>
        <img className= "profile-picture" src={userImage} alt="profile-pic"/>
        <p className='username'>Alex Cooper</p>
        <div>
        <button className="mobile-profile-edit-button"><span className="mobile-profile-edit-button-text">My Team</span></button>
      <button className="mobile-profile-edit-button"><span className="mobile-profile-edit-button-text">My Details</span></button>
        </div>
      </div>
  )
}

export default UserProfile