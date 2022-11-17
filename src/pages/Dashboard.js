import React from 'react'
import Navbar from './Navbar'
import UserProfile from './Dashboard/UserProfile'
import MyTeamMobile from './Dashboard/MyTeamMobile'
import MyTeam from './Dashboard/MyTeam'
import ProfileForm from './Dashboard/ProfileForm'
function Dashboard() {
  return (
    <div>
    <Navbar/>
    <div className="UserDashboard">
    <section className='user-profile' id='userProfile'>
    <div className="profile-div">
      <UserProfile/>
      <ProfileForm/>
    </div>
    </section>
    <section className='team-details' id='team-page'>
    <MyTeam/>
    <MyTeamMobile/>
    </section>
    </div>
    </div>
  )
}

export default Dashboard