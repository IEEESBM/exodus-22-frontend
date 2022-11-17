import React from 'react'
import teamImage from './createTeam.svg'
const CreateTeamMobile = () => {
  return (
    <div className='rectangle-mobile'>
    <div>
      <h3 className='rect-heading'>Create a Team</h3>
    </div>
       <div className="mob-team">
       <p className='mobile-rect-label'>Team Name:</p>
       <input className='create-rect-mobile-label'/>
            
            <p className='mobile-rect-label'>Topic:</p>
            <input className='create-rect-mobile-label'/>
            <p className='mobile-rect-label'>No. of Teammates :</p>
            <input className='create-rect-mobile-label'/>
            <p className='mobile-rect-label'>Team Code:</p>
            <p className='create-rect-mobile-label'>UP78</p>
    
       </div>
        
          <button className="team-edit-button" style={{marginTop:'-10%'}}><span className="team-edit-button-text">SAVE</span></button>
          <img src={teamImage} alt="team-pic" className="create-team-pic-mobile"/>
        </div>
  )
}

export default CreateTeamMobile