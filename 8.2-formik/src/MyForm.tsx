import React, { useState } from "react";
import { useFormik } from "formik";
import { json } from "stream/consumers";

interface formErrors {
  name?: string;
  email?: string;
  mobile?: string;
}

export const MyForm = () => {
  //state to store submitted data
  const [data, setData] = useState<string>("");

  //create hook object
  const formik = useFormik({
    // initial values are initial state for From-fields
    initialValues: {
      name: "",
      email: "",
      mobile: "",
    },
    // called on submitting form. mapped formik.handleSubmit
    onSubmit: (values) => {
      console.log("Form Data: ", values);
      setData(JSON.stringify(values));
    },
    validate: (values) => {
      let errors: formErrors = {};
      if (values.name === undefined || values.name === "") {
        errors.name = "Required..!";
      }
      if (values.email === undefined || values.email === "") {
        errors.email = "Required..!";
      } else {
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (values.email.match(mailformat) === null) {
          errors.email = "Invalid email..!";
        }
      }
      return errors;
    },
  });

  return (
    <>
      <p>
        install formik :- <code>npm install formik --save</code>
      </p>
      <p>
        Use <code>useFormik</code> hook.
      </p>
      <br />
      <form onSubmit={formik.handleSubmit} className="form-control">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <div>{formik.errors.name}</div>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <div>{formik.errors.email}</div>
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          name="mobile"
          id="mobile"
          onChange={formik.handleChange}
          value={formik.values.mobile}
        />
        <button type="submit">Submit</button>
      </form>
      {/* Display submitted Data */}
      <div className="result">Submittted Data :- {data}</div>
      <br />
      <hr />
      <div>
        <p>
          Que 1:- Why it's showing error for all fieds even if we change only
          1st (single) field ?{" "}
        </p>
        <p>
          Que 2:- Why it's showing <i>invalid email</i> in the mid of changing
          email?
        </p>
        <p>
          Que 3:- Could we declare like <code>let errors = {"{}"}</code> in
          typescript ?
        </p>
        <p>
          Que 4:- Why we are making <code>formErrors</code> fields nullable?
          <li>Would non-nullable fields allow submit form ?</li>
        </p>

        <p>
          <b>Note:- Question 1,2 will be answered in next POC 8.3-formik</b>
          <li>
            will implemenet <code>formik.touched</code>
          </li>
        </p>
      </div>
    </>
  );
};
