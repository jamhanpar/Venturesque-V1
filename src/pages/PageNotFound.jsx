import React from "react";
import { connect } from "react-redux";

const PageNotFound = () => {
  return (
    <section className="page-not-found-container">
      <p>Page Not Found</p>
    </section>
  );
};

// const msp = () => ({

// });

// const mdp = dispatch => ({

// });

export default connect(null, null)(PageNotFound);
