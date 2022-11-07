import React from 'react'
import './About.css'
import img1 from '../Images/img1-ab.svg'
import img2 from '../Images/img2-ab.png'

function About() {
  return (
    <div className='about-body'>
      <div className='content'>
        <h1 className='header'>
          About the Event
        </h1>
        <div className='block1'>
          <div className='text1'>
            <p className='para1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className='img'>
            <img className='img1' src={img1} alt='logo1' />
          </div>
        </div>
        <div className='block2'>
          <div className='text2'>
            <p className='para2'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className='img'>
            <img className='img2' src={img2} alt='logo2' />
          </div>
        </div>
      </div>

    </div>

  )
}

export default About