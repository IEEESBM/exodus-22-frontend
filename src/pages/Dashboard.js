import React from 'react'
import Navbar from './Navbar'
import UserProfile from './Dashboard/UserProfile'
import teamImage from './Dashboard/dashboard_team.svg'
import DashboardDetails from './Dashboard/DashboardDetails'
function Dashboard() {
  return (
    <div>
    <Navbar/>
    
    <div className="UserDashboard">
    <section className='user-profile' id='userProfile'>
    <div className="profile-div">
      <UserProfile/>
      <p className='mobile-username'>Alex Cooper</p>
      <DashboardDetails/>

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