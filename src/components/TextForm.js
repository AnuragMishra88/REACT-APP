import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,settext]=useState('');
    const handle=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const onchng=(event)=>{
        settext(event.target.value);
    }
    
  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={onchng}
          value={text}
          rows="8"
        ></textarea>
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={handle}>
          Convert To UpperCase
        </button>
      </div>
      <div className="container my-3">
        <h2>Text Summary</h2>
        <p>
          {text.length} Characters and {text.split(" ").length} Words
        </p>
        <p>{0.008 * text.split(" ").length} minutes words;</p>
      </div>
    </>
  );
}
