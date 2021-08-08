// import logo from './logo.svg';
import {BtnContainer} from './components/btnContainer/Btncontainer'
import './App.css';
import {Display} from "./components/display/Display";
import { useState } from 'react';

const App = () => {

  const [textToDisplay,setTextToDisplay] = useState("");
  const [isOff, setIsOff] = useState(false);
  const [isError , setIsError] = useState(false);

  const [total,setTotal] = useState(0);

  const handelonButtonClick = val => {

    if (val === "=")
    {
      return onTotal();
    }
    if (val === "AC")
    {
      return setTextToDisplay("");
    }
    if (val === "C")
    {
      const str = textToDisplay.toString().slice(0,-1);
      return setTextToDisplay(str);
    }
    if (val === "OFF")
    {
      return setIsOff(!isOff);
    }
    // if (typeof val == "number")
    


    setTextToDisplay(textToDisplay + val);
  };

  const onTotal = () => {
const total = eval(textToDisplay)  + randomval();

const newtotal  =  eval(textToDisplay);

  if ( total === newtotal )
  {
    const newT = setIsError(!isError);
  
    return setTextToDisplay(total.toString());
  }
  setTextToDisplay(total.toString());
  }

  const randomval = () => {
    const rand = Math.floor(Math.random() * 10);

    return rand < 8 ? rand : 0;
  }

  return (
    <div> 
      <div className="mainparent"></div>
<Display textToDisplay = {textToDisplay}  isOff = {isOff} isError = {isError}/>
<BtnContainer handelonButtonClick = {handelonButtonClick} />
    </div>
  );
}

export default App;
