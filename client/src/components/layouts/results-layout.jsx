import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useReactRouter from "use-react-router";
import "./results-layout.scss";

const ResultsLayout = () => {
  return (
    <div className="results-layout-container">
      <div className="side-nav">Side Nav</div>
      <div className="results-section">
        <div className="results-list">
          <div className="restaurant-list">
            <div className="results-item">restaurant</div>
            {/* <div className="results-item">restaurant</div>
            <div className="results-item">restaurant</div> */}
          </div>
          <div className="activity-list">
            <div className="results-item">activity</div>
            {/* <div className="results-item">activity</div>
            <div className="results-item">activity</div> */}
          </div>
        </div>
        <div className="map-item">map</div>
        <div className="results-item">content</div>
        <div className="results-item">content</div>
        <div className="results-item">content</div>
        <div className="results-item">content</div>
      </div>
    </div>
  );
};

export default ResultsLayout;
