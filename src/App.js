import React from "react";

import { Footer } from "./containers";
import { Navbar } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Blog from "./pages/blog/Blog.tsx";

import "./App.css";
import BlogPost1 from "./pages/blog/Posts/BlogPost1.tsx";
import BlogPost2 from "./pages/blog/Posts/BlogPost2.tsx";

const App = () => {
  return (
    <div className="App gradient__bg">
      <div className="subclass">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/1" element={<BlogPost1 />} />
            <Route path="/blog/2" element={<BlogPost2 />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
