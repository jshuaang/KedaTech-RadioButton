import React, { useState } from 'react';
import './RadioButton.css';

function RadioButton({value, label}) {
  return (
        <div className="radio-wrapper">
            <input
            type="radio" 
            value={value}
            name="rad"
        />
            <label>{label}</label>
        </div>
  )}


const TextField = () => {
  const [text, setText] = useState('');

  return (
      <div className="radio-wrapper">
      <input
        type="radio" 
        value={text}
        name="rad"
      />
      <input type="text" value={text} name="rd-text" placeholder='Input here...' onChange={(e) => setText(e.target.value)}></input>
      </div>
  )
}

const Date = () => {
  const [date, setDate] = useState('');
  return (
    <div className="radio-wrapper">
    <input
       type="radio" 
       value={date}
       name="rad"
    />
    <input type="date" name="rd-date" onChange={(e) => setDate(e.target.value)}></input>
    </div>
  )
}

RadioButton.Date = Date;
RadioButton.TextField = TextField;

export default RadioButton;
