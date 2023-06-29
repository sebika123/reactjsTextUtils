//import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import  TextForm from './components/TextForm';
import  About from './components/About';
import {useState} from 'react';


function App() {
 const [mode,setMode] = useState('light');
 ///whether dark mode is enabled or not
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
  }
  else{
    setMode('light');
  }
  }

  return (
  <>
  
<Navbar title="TextManu" mode={mode} toggleMode={toggleMode} home="HOme" about="ABout Us"/ >
<div className="container">
<TextForm heading="enter your text here"/>
</div>
<div className="container">
  <About/>
</div>
  </>
  );
}

export default App;
