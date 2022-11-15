import React from 'react'
import Navbar from './Navbar'
import UserProfile from './Dashboard/UserProfile'
import teamImage from './Dashboard/dashboard_team.svg'
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
      <div className='team-a'>
        <div className='rectangle'>
        <h3 className='rect-heading'>My Team</h3>
        <div className='rect-main'>
          <div className='rectangle-left'>  
            <p className='rect-left-label'>Team Name:</p>
            <p className='rect-left-label'>Team Code:</p>
            <p className='rect-left-label'>Topic:</p>
            <p className='rect-left-label'>Teammates :</p>
          </div>
          <div className='rectangle-right'>  
            <p className='rect-right-label'>Avengers</p>
            <p className='rect-right-label'>UP78</p>
            <p className='rect-right-label'>Spider-man</p>
            <p className='rect-right-label-member'>1. Thanos</p>
            <p className='rect-right-label-member'>2. Hulk</p>
            <p className='rect-right-label-member'>3. Captain</p>
            <p className='rect-right-label-member'>4. Ironman</p>

          </div>
          </div>
          <button className="team-edit-button"><span className="team-edit-button-text">Delete Team</span></button>
            <button className="team-edit-button"><span className="team-edit-button-text">Leave Team</span></button>
        </div>
      </div>
      <div className='team-b'><img className= "team-picture" src={teamImage} alt="profile-pic"/></div>
    </div>
    </section>
    </div>
    </div>
  )
}

export default Dashboard