import React, { useState } from "react";
import { useFormik } from "formik";
import { json } from "stream/consumers";

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
  });

  return (
    <>
      <p>
        Use <code>useFormik</code> hook.
      </p>
      <br />
      <form onSubmit={formik.handleSubmit} className="form-control">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
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
      <div>{data}</div>
    </>
  );
};
