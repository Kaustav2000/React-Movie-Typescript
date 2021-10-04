import React, { useState } from "react";
import { Form, Input } from "./HomeSearchForm.style";

const HomeSearchForm = () => {
  const [formData, setFormData] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFormData(e.currentTarget.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search movies, tv shows"
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </Form>
  );
};

export default HomeSearchForm;
