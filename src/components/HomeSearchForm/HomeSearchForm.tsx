import React, { useState } from "react";
import { useHistory } from "react-router";
import { searchData } from "../../api/fetchHomepagedata";
import { Form, Input } from "./HomeSearchForm.style";

export let results: any[] = [];

const HomeSearchForm = () => {
  const history = useHistory();
  const [formData, setFormData] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    results = await searchData(formData);
    history.push(`/search/query/${formData}`);
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
