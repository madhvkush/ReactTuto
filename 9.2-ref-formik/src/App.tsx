import { useRef, useState } from "react";
import "./App.css";
import { Form1, Form1Values } from "./Form1";
import { Form2, Form2Values } from "./Form2";
import { FormikProps } from "formik";

function App() {
  const form1Ref = useRef<FormikProps<Form1Values>>(null);
  const form2Ref = useRef<FormikProps<Form2Values>>(null);

  const [form1Data, setForm1Data] = useState<string>("");
  const [form2Data, setForm2Data] = useState<string>("");

  return (
    <div className="App">
      <p>The following hooks/function would be used</p>
      <ul>
        <li>
          <code style={{ color: "green" }}>useRef()</code> - it creates the ref
          object which can be used to access any element or child component
        </li>
        <li>
          <code style={{ color: "green" }}>forwardRef</code> - allows you to
          forward a ref from a parent component to a child component. it creates
          HOC
        </li>
        <li>
          <code style={{ color: "green" }}>useImperativeHandle()</code> -
          Ensures the ref is correctly set up and exposes the necessary methods.
        </li>
      </ul>
      <hr />
      <Form1
        ref={form1Ref}
        onSubmit={(values) => {
          console.log("Form1 Data: ", values);
          setForm1Data(JSON.stringify(values));
        }}
      />
      <br />

      <Form2
        ref={form2Ref}
        onSubmit={(values) => {
          console.log("Form2 Data: ", values);
          setForm2Data(JSON.stringify(values));
        }}
      />
      <br />
      <button
        onClick={() => {
          form1Ref.current?.handleSubmit();
          form2Ref.current?.handleSubmit();
        }}
      >
        Submit Both Forms
      </button>
      <hr />
      <div className="result">Form1 Data :- {form1Data}</div>
      <div className="result">Form2 Data :- {form2Data}</div>
    </div>
  );
}

export default App;
