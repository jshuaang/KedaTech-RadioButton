import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';
import RadioButton from './Component/RadioButton';

function App() {
  const [radios, setRadios] = useState([<RadioButton value="firstRadio" label="first radio" />, <RadioButton.Date />, <RadioButton.TextField />]);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState('');
  const [result, setResult] = useState('');
  const [selectAddRadio, setSelectAddRadio] = useState(null);


  const addRadio = (e) => {
        e.preventDefault();
        if(selectAddRadio === 'textfield'){
          setRadios(radios => [...radios, <RadioButton.TextField />])
        }
        if(selectAddRadio === 'datefield'){
          setRadios(radios => [...radios, <RadioButton.Date/>])
        }
        if(selectAddRadio === 'other'){
          setRadios(radios => [...radios, <RadioButton value={value} label={label} />])
          setValue('')
          setLabel('')
        }
  }
  
  return (
    <div className='container-wrapper'>
      <h1>Radio button component</h1>

      {/* add radio */}
      <div className="add-radio">
        <label htmlFor="radio">Add new radio button:</label>
        <select name="radio"  onChange={(e) => setSelectAddRadio(e.target.value)}>
          <option>Select type..</option>
          <option value="textfield">Text Field</option>
          <option value="datefield">Date Field</option>
          <option value="other">Other</option>
        </select>
        <button onClick={(e) => addRadio(e)}>add radio</button>
        {/* {selectAddRadio === 'other' && ( */}
            <CSSTransition
            in={selectAddRadio==='other'}
            timeout={300}
            classNames="input-user-wrapper"
            unmountOnExit>
            <div className="input-user">
              <input type="text" name='value' placeholder='input value..' onChange={(e) => setValue(e.target.value)}/>
              <input type="text" name='label' placeholder='input label..' onChange={(e) => setLabel(e.target.value)}/>
            </div>
           </CSSTransition>
        {/* )} */}
      </div>

      {/* radio container */}
      <div className="radio-container" id='radio-container' onChange={(e) => {
        if(e.target.checked){
          setResult(e.target.value)
        }
      }}>
        {radios?.map((radio,i) => (
          <div key={i}>
            {radio}
          </div>
        ))}
      </div>

      {/* result */}
      <div className="result-wrapper">
        <h1>Result:</h1>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
