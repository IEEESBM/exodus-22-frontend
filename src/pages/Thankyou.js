import { useState } from 'react';
import { React, useEffect } from 'react'

function Thankyou() {
  const [ctr, setCtr] = useState(5);
  function countdown(ctr) {
    if (ctr <= 0) {
      window.location.href = 'http://localhost:3000/';
    }
    if (ctr !== 0) {
      setCtr(ctr - 1);
    }
  }
  useEffect(() => {
    setInterval(function () { countdown(ctr); }, 1000);
  }, [ctr])
  return (
    <>
      <div className='thanks'>Thank you! Your response has been recorded</div>
      <div className='redirect'>Redirecting to the home page in {ctr} seconds</div>
    </>
  )
}

export default Thankyou