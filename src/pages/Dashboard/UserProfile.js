import React from 'react'
import userImage from './dashboard-profile.svg'

const UserProfile = () => {
  return (
    <div className="profile-a">
        <h1 className='heading'>User Dashboard</h1>
        <img className= "profile-picture" src={userImage} alt="profile-pic"/>
        <p className='username'>Alex Cooper</p>
      </div>
  )
}

export default UserProfile