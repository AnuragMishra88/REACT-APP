import React from 'react';
// import { Link } from "react-router-dom"; // ✅ Add this line

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a> {/* ✅ Changed from <a> to <Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a> {/* ✅ Changed */}
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button type="button" className="btn btn-info">Search</button>
          </form>
        </div>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="switchCheckChecked" />
        <label className="form-check-label" htmlFor="switchCheckChecked">Enable Dark Mode</label>
      </div>
    </nav>
  );
}
