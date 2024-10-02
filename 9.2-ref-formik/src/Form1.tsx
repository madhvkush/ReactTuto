import { FormikProps, useFormik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import * as Yup from "yup";

export interface Form1Props {
  onSubmit: (values: Form1Values) => void;
}

export interface Form1Values {
  name: string;
  email: string;
  mobile: string;
}

export const Form1 = forwardRef<FormikProps<Form1Values>, Form1Props>(
  (props, ref) => {
    const divErrorStyle = {
      color: "red",
    };

    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
        mobile: "",
      } as Form1Values,
      onSubmit: props.onSubmit,
      validationSchema: Yup.object({
        email: Yup.string()
          .email("Invalid email address format")
          .required("Email is required"),
        name: Yup.string().required("Name required"),
      }),
    });

    //ensure that the ref is correctly set up and exposes the necessary methods and properties
    useImperativeHandle(ref, () => formik);

    return (
      <>
        <h2>Form-1 : Personal Information</h2>
        <div className="row">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && (
            <div style={divErrorStyle}> {formik.errors.name}</div>
          )}
        </div>
        <div className="row">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && (
            <div style={divErrorStyle}>{formik.errors.email}</div>
          )}
        </div>
        <div className="row">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
          />
        </div>
      </>
    );
  }
);
