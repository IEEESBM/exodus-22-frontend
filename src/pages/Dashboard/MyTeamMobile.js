import React from 'react'
import teamImage from './dashboard_team.svg'
const MyTeamMobile = () => {
  return (
    <div className='rectangle-mobile'>
    <div>
      <h3 className='mobile-rect-heading'>My Team</h3>
      <img src={teamImage} alt="team-pic" className="team-pic-mobile"/>
    </div>
       <div className="mob-team">
       <p className='mobile-rect-label'>Team Name:</p>
       <p className='rect-mobile-label'>Avengers</p>
            <p className='mobile-rect-label'>Team Code:</p>
            <p className='rect-mobile-label'>UP78</p>
            <p className='mobile-rect-label'>Topic:</p>
            <p className='rect-mobile-label'>Spider-man</p>
            <p className='mobile-rect-label'>Teammates :</p>
            <p className='rect-mobile-label-member'>1. Thanos</p>
            <p className='rect-mobile-label-member'>2. Hulk</p>
            <p className='rect-mobile-label-member'>3. Captain</p>
            <p className='rect-mobile-label-member'>4. Ironman</p>
    
       </div>
            
          <button className="team-edit-button"><span className="team-edit-button-text">Delete Team</span></button>
            <button className="team-edit-button"><span className="team-edit-button-text">Leave Team</span></button>
        </div>
  )
}

export default MyTeamMobile