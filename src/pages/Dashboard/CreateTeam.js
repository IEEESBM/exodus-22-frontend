import React from 'react'
import teamImage from './createTeam.svg'
const CreateTeam = () => {
  return (
    <div className="team-div">
      <div className='team-a'>
        <div className='rectangle'>
        <h3 className='rect-heading'>Create a Team</h3>
        <div className='rect-main'>
          <div className='rectangle-left'>  
            <p className='rect-left-label'>Team Name:</p>
            <p className='rect-left-label'>Topic:</p>
            <p className='rect-left-label'>No. of Teammates :</p>
            <p className='rect-left-label'>Team Code:</p>
          </div>
          <div className='rectangle-right'>  
            <input className='rect-right-label'/>
            <input className='rect-right-label'/>
            <input className='rect-right-label'/>
            <input className='rect-right-label'/>
          </div>
          </div>
          <button className="team-edit-button" style={{marginLeft:'15%'}}><span className="team-edit-button-text">SAVE</span></button>
        </div>
      </div>
      <div className='team-b'><img className= "team-picture" src={teamImage} alt="profile-pic"/></div>
    </div>
  )
}

export default CreateTeam