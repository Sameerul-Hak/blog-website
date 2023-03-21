import React, { useState } from "react";
import axios from "axios";
import "./create.css"; // Import the CSS file for the form

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogRelatedTo, setBlogRelatedTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
      cover: blogRelatedTo,
    };
    console.log(data);
    axios
      .post("http://localhost:8800/books", data)
      .then((response) => {
        console.log(response);
        alert("blog saved sucessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <h2 className="blog-form__title">Create a new blog post</h2>
      <label className="blog-form__label">
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="blog-form__input"
        />
      </label>
      <label className="blog-form__label">
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="blog-form__textarea"
        />
      </label>
      <label className="blog-form__label">
        Blog related to:
        <input
          type="text"
          value={blogRelatedTo}
          onChange={(e) => setBlogRelatedTo(e.target.value)}
          className="blog-form__input"
        />
      </label>
      <button type="submit" className="blog-form__button">
        Submit
      </button>
    </form>
  );
}
export default Create;
