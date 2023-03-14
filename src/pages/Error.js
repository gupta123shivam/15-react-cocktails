import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-section">
      <div className="error-container">
        <h1>oops!... page does not exist</h1>
        <Link to="/" className="btn btn-primary">back Home</Link>
      </div>
    </section>
  );
};

export default Error;
