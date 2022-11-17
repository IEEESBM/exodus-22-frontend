import React from 'react'
import teamImage from './dashboard_team.svg'
const MyTeam = () => {
  return (
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
  )
}

export default MyTeam