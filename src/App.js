import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="Dwebsite" home="Home" link="contact us" />

      <TextForm label="Enter your text here" placeholder="Type something..." />
    </>
  )
}


export default App;
