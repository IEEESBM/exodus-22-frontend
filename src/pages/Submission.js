import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const initialValues = {
  details: [
    {
      name: '',
      regNo: null,
      phone: null
    },
  ],
};

function Submission() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar></Navbar>
      <div className="formall">
        <div className="formHeading">
          <h1 className="headingSub">Submission&nbsp;Form</h1>
        </div>
        <div className="formMain">
          <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
              document.querySelector('.sbmt').style.display = 'none';
              const doc = {
                details: values.details,
                link: document.querySelector('.lnkval').value
              }
              if (values.details.length < 5 && values.details.length > 0) {
                axios.post('http://localhost:3010/submit', doc)
                  .then(function (response) {
                    if (response.status === 200) {
                      navigate('/thankyou');
                    } else {
                      alert('sorry could not submit');
                    }
                  })
                  .catch(function (error) {
                    alert('sorry could not submit');
                  });
              }
              else{
                alert('invalid number of team members');
              }

            }}
          >
            {({ values }) => (
              <Form>
                <FieldArray name="details">
                  {({ insert, remove, push }) => (
                    <div>
                      {values.details.length > 0 &&
                        values.details.map((friend, index) => (
                          <div className="row" key={index}>
                            <div >
                              <label htmlFor={`details.${index}.name`}
                                className="groupname text">Name</label>
                              <Field
                                name={`details.${index}.name`}
                                type="text"
                                className="blank"
                                required
                              />
                              <ErrorMessage
                                name={`details.${index}.name`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div >
                              <label htmlFor={`details.${index}.regNo`}
                                className="groupname text">Registration No.</label>
                              <Field
                                name={`details.${index}.regNo`}
                                type="number"
                                className="blank"
                              />
                              <ErrorMessage
                                name={`details.${index}.name`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div >
                              <label htmlFor={`details.${index}.phone`}
                                className="groupname text">Phone No.</label>
                              <Field
                                name={`details.${index}.phone`}
                                type="number"
                                className="blank"
                                required
                              />
                              <ErrorMessage
                                name={`details.${index}.name`}
                                component="div"
                                className="field-error"
                              />
                            </div>
                            <div >
                              <button
                                type="button"
                                className="secondary btn del"
                                onClick={() => remove(index)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        ))}
                      <button
                        type="button"
                        className="secondary btn1 add"
                        onClick={() => push({ name: '', regNo: null, phone: null })}
                      >
                        Add Team Member
                      </button>
                    </div>
                  )}
                </FieldArray>

                <div className="lnk">
                  <label htmlFor="link" className="groupname text">Link</label>
                  <input required type="text" className="blank lnkval" />
                </div>
                <button type="submit" className="secondary btn2 sbmt">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Submission;