import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import EditBlog from "./components/edit";
import CreateBlog from "./components/create";
import BlogList from "./components/bloglist";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/api/blogs" component={BlogList} />
      <Route path="/api/blog/edit/:id" component={EditBlog} />
      <Route path="/api/blog/add" component={CreateBlog} />
      </div>
    </Router>
  );
}

export default App;
