import React from 'react'
import Navbar from './Navbar'
import UserProfile from './Dashboard/UserProfile'
function Dashboard() {
  return (
    <div>
    <Navbar/>
    <div className="UserDashboard">
    <section className='user-profile' id='userProfile'>
    <div className="profile-div">
      <UserProfile/>
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
        <button className="profile-edit-button"><span className="profile-edit-button-text">Edit</span></button>
        <button className="profile-edit-button"><span className="profile-edit-button-text">Save</span></button>
      </div>
      </form>
    </div>
    </div>
    </section>
    <section className='team-details' id='team-page'>
    <div className="team-div">
    teamdiv
      <div className='team-a'>
      </div>
      <div className='team-b'>teamb</div>
    </div>
    </section>
    </div>
    </div>
  )
}

export default Dashboard