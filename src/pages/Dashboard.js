import React from 'react'
import Navbar from './Navbar'
import userImage from '../Images/dashboard-profile.svg'
function Dashboard() {
  return (
    <div>
    <Navbar/>
    <div className="UserDashboard">
    <section className='user-profile' id='userProfile'>
    <div className="profile-div">
      <div className="profile-a">
        <h1 className='heading'>User Dashboard</h1>
        <img className= "profile-picture" src={userImage} alt="profile-pic"/>
        <p className='username'>Alex Cooper</p>
      </div>
    <div className="profile-b">div2</div>
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