import { FormikProps, useFormik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import * as Yup from "yup";

export interface Form2Props {
  onSubmit: (values: Form2Values) => void;
}

export interface Form2Values {
  address: string;
  city: string;
  state: string;
}
export const Form2 = forwardRef<FormikProps<Form2Values>, Form2Props>(
  (props, ref) => {
    const divErrorStyle = {
      color: "red",
    };

    const formik = useFormik({
      initialValues: {
        address: "",
        city: "",
        state: "MP",
      } as Form2Values,
      onSubmit: props.onSubmit,
      validationSchema: Yup.object({
        address: Yup.string().required("Address is required"),
        city: Yup.string().required("City is required"),
      }),
    });

    //ensure that the ref is correctly set up and exposes the necessary methods and properties
    useImperativeHandle(ref, () => formik);

    return (
      <>
        <h2>Form-2 : Address</h2>
        <div className="row">
          <label htmlFor="address">Address *</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <div style={divErrorStyle}> {formik.errors.address}</div>
          )}
        </div>
        <div className="row">
          <label htmlFor="city">City *</label>
          <input
            type="text"
            name="city"
            id="city"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city && (
            <div style={divErrorStyle}>{formik.errors.city}</div>
          )}
        </div>
        <div className="row">
          <label htmlFor="state">State</label>
          <select
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="UP">UP</option>
            <option value="MP">MP</option>
            <option value="Delhi">Delhi</option>
            <option value="Bihar">Bihar</option>
          </select>
        </div>
      </>
    );
  }
);
