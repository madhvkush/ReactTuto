import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

interface formErrors {
  name?: string;
  email?: string;
  mobile?: string;
}

export const MyForm = () => {
  //state to store submitted data
  const [data, setData] = useState<string>("");

  const divErrorStyle = {
    color: "red",
  };
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

    /* If validationSchema is defined then no need of validate */

    // validate: (values) => {
    //   let errors: formErrors = {};
    //   if (values.name === undefined || values.name === "") {
    //     errors.name = "Required..!";
    //   }
    //   if (values.email === undefined || values.email === "") {
    //     errors.email = "Required..!";
    //   } else {
    //     let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //     if (values.email.match(mailformat) === null) {
    //       errors.email = "Invalid email..!";
    //     }
    //   }
    //   return errors;
    // },

    /* Validation Schema with Yup.! */
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
      name: Yup.string().required("Name required"),
    }),
  });

  return (
    <>
      <p>
        Yup installation: <code>npm i yup</code>
      </p>

      <form onSubmit={formik.handleSubmit} className="form-control">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && <div style={divErrorStyle}> {formik.errors.name}</div>}
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && <div style={divErrorStyle}>{formik.errors.email}</div>}
        <label htmlFor="mobile">Mobile</label>
        <input
          type="text"
          name="mobile"
          id="mobile"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.mobile}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      {/* Display submitted Data */}
      <div className="result">Submitted Data :- {data}</div>
    </>
  );
};
