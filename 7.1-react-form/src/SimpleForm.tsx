import React from "react";

export const SimpleForm = () => {
  const handleSubmit = (submitProps: any) => {
    console.log(submitProps);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="mobile">Mobile</label>
        <input type="text" name="mobile" id="mobile" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
