import { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const changemode=()=>{
    if(mode==="light"){
      setMode('dark');
      document.body.style.backgroundColor="rgba(93, 97, 97, 0.8)";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggle={changemode}></Navbar>
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter your text:" />} />
          </Routes> */}
          <TextForm heading="Enter your text:" />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
