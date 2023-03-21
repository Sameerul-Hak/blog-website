import React, { useEffect, useState } from "react";
import "./blog.css";
import { blog } from "../../assets/data/data";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import b1 from "../../assets/images/b5.jpg";
export const Card = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8800/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <section className="blog">
        <div className="container grid3">
          {books.map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={b1} alt="" />
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <a href="/">#{item.cover}</a>
                </div>
                <Link to={`/details/${item.id}`} className="link">
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.description.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" />{" "}
                  <AiOutlineComment className="icon" />{" "}
                  <label htmlFor="">27</label>
                  <AiOutlineShareAlt className="icon" />{" "}
                  <label htmlFor="">SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
