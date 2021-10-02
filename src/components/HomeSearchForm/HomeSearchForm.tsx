import React from "react";
import { Form, Input } from "./HomeSearchForm.style";

const HomeSearchForm = () => {
  const handleSubmit = (e: React.FormEventHandler<HTMLFormElement>) => {
    console.log(e);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Search movies, tv shows" />
      <button type="submit">Search</button>
    </Form>
  );
};

export default HomeSearchForm;
