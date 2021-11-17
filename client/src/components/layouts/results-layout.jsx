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
            <div className="restaurant-item">restaurant</div>
            <div className="restaurant-item">restaurant</div>
            <div className="restaurant-item">restaurant</div>
          </div>
          <div className="activity-list">
            <div className="activity-item">activity</div>
            <div className="activity-item">activity</div>
            <div className="activity-item">activity</div>
          </div>
        </div>
        <div className="map-item">map</div>
        <div className="featured-list">
          <div className="results-item">random-content</div>
          <div className="results-item">random-content</div>
          <div className="results-item">random-content</div>
          <div className="results-item">random-content</div>
        </div>
      </div>
    </div>
  );
};

export default ResultsLayout;
