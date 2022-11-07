import React from 'react'
import './Rules.css'
import hand from '../Images/hand.svg'
import pm from '../Images/pm.svg'
import processor from '../Images/processor.svg'
import bulb from '../Images/bulb.svg'

function Rules() {
  return (
    <div className='bodyr'>
      <div className='contentr'>
        <h1 className='headerr'>
          Rules
        </h1>
        <div className='block1r'>
          <div className='text1r'>
            <p className='para1r'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div >
            <img className='img1r' src={hand} alt='logo1' />
          </div>
        </div>
        <div className='block2r'>
          <div className='text2r'>
            <p className='para2r'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div>
            <img className='img2r' src={bulb} alt='logo2' />
          </div>
        </div>
        <div className='block3r'>
          <div className='text3r'>
            <p className='para1r'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div >
            <img className='img3r' src={processor} alt='logo1' />
          </div>
        </div>
        <div className='block4r'>
          <div className='text4r'>
            <p className='para4r'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div >
            <img className='img4r' src={pm} alt='logo1' />
          </div>
        </div>
      </div>

    </div>

  )
}

export default Rules