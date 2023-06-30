//import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import  TextForm from './components/TextForm';
import  About from './components/About';
import  Alert from './components/Alert';
import {useState} from 'react';


function App() {
 const [mode,setMode] = useState('light');
 const [alert, setAlert] = useState(null);

 const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(()=>{
  setAlert(null);
},1000)

 }
 ///whether dark mode is enabled or not
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert('Darkmode enabled','success');
    document.title="TextManu-Dark";
    setInterval(()=>{
      document.title="TextManu-Dark(1)";
    },1000);

    setInterval(()=>{
      document.title="TextManu-Light";
    },1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='#042743';
    showAlert('Lightmode enabled','success');
    document.title="TextManu-Light";
  }
  }


  return (
  <>
  
<Navbar title="TextManu" mode={mode} toggleMode={toggleMode} home="HOme" about="ABout Us"/ >
  <Alert alert={alert}/>
<div className="container">
<TextForm  showAlert={showAlert} heading="enter your text here"/>
</div>
<div className="container">
  <About alert="welcome"/>
</div>
  </>
  );
}

export default App;
