import './App.css';
import React, { Component } from 'react';
import Navbar from './component/Navbar.js';
import News from './component/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    const apiKey = 'your-api-key'; // Replace with your actual API key
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                key="general"
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                key="business"
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                key="entertainment"
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/General"
            element={
              <News
                apiKey={apiKey}
                key="General"
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                key="health"
                country="us"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                key="science"
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sport"
            element={
              <News
                apiKey={apiKey}
                key="sport"
                country="us"
                category="sport"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                key="technology"
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    )
  }
}
