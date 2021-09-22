import React from "react";
import { Form, Input } from "./HomeSearchForm.style";

const HomeSearchForm = () => {
  return (
    <Form>
      <Input type="text" placeholder="Search movies, tv shows" />
      <button type="submit">Search</button>
    </Form>
  );
};

export default HomeSearchForm;
