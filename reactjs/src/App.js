//import logo from './logo.svg';
import './App.css';
import  Navbar from './components/Navbar';
import  TextForm from './components/TextForm';

function App() {
  return (
  <>
  
<Navbar title="TextManu" home="HOme" about="ABout Us"/ >
<div className="container">
<TextForm heading="enter your text here"/>
</div>
  </>
  );
}

export default App;
