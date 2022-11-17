import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  const [showAnswer, setShowAnswer] = 'answer'
  const btn = showInfo ? 'btn-minus' : 'btn-plus'
  const question = showInfo ? 'question-ans' : 'question'
  return (
    <article className={question} id="cont">
      <header id="header-cont">
        <div className='title-cont'>
          {title}
        </div>
        <button className={btn} onClick={() => {
          setShowInfo(!showInfo)
        }}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
      </header>
      <div className='{showanswer}' id="cont-ans">
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  )
};

export default Question;
// import React, { useState } from 'react';
// import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
// const Question = ({ title, info }) => {
//   const [showInfo, setShowInfo] = useState(false)
//   const [showAnswer, setShowAnswer] = 'answer'
//   const btn = showInfo ? 'btn-minus' : 'btn-plus'
//   const question = showInfo ? 'question-ans' : 'question'
//   return (
//     <article className={question} id="cont">
//       <header id="header-cont">
//         <div className='title-cont'>
//           {title}
//         </div>
//         <button className={btn} onClick={() => {
//           setShowInfo(!showInfo)
//         }}>{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
//       </header>
//       <div className='{showanswer}' id="cont-ans">
//         {showInfo && <p>{info}</p>}
//       </div>
//     </article>
//   )
// };

// export default Question;
