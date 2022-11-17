import React from 'react'
import userImage from './dashboard-profile.svg'
import enterCode from './entercode.svg'
const UserProfile = () => {
  return (
    <div className="profile-a">
        <h1 className='heading'>User Dashboard</h1>
        <img className= "profile-picture" src={userImage} alt="profile-pic"/>
        <p className='username'>Alex Cooper</p>
        <div>
        <p className="no-team-text">Currently, you're not part of a team.</p>
        <button className="no-team-edit-button"><span className="no-team-edit-button-text">Create a Team</span></button>
        <button className="no-team-edit-button"><span className="no-team-edit-button-text">Enter Team code</span></button>
        <img src={enterCode} className="code-img" alt="enter code"/>

        </div>
      </div>
  )
}

export default UserProfile