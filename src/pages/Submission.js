import React from "react";

function Submission() {
  return (
    <><div className="formall">
      <div className="formMain">
        <form action="">
          <div className="formHeading">
            <h1 className="headingSub">Submission&nbsp;Form</h1>
          </div>
          <div className="groupname text">
            <label htmlFor="groupname">
              Group&nbsp;Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input
              type="text"
              className="blank cursor-center"
              name="groupname"
              id="groupname"
            />
          </div>
          <div className="appid text">
            <label htmlFor="appid">Application&nbsp;ID:&nbsp;&nbsp;</label>
            <input
              type="text"
              className="blank cursor-center "
              name="appid"
              id="appid"
            />
          </div>
          <div className="topic text">
            <label htmlFor="topic">Topic:&nbsp;&nbsp;</label>
            <input
              type="text"
              className="blank cursor-center "
              name="topic"
              id="topic"
            />
          </div>
          <div className="sublink text">
            <label htmlFor="sublink">Submission&nbsp;Link:&nbsp;&nbsp;</label>
            <input
              type="text"
              className="blank cursor-center "
              name="sublink"
              id="sublink"
            />
          </div>
          <div className="button btn-padding">
            <button type="submit" className="submit text ">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Submission;