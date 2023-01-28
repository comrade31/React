// import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
// import TextForm from './components/TextForm';
function App() {
  return (
    <>
     
      <Navbar title = "Text-Utils" about= "About-us"/>
  {/* div.container is a bootstrap class its give us a look , yh textarea ko sreen k center m le aayga */}
  {/* my-3 is a bootstrap class it give us margin in y of 3  */}
      <div className="container my-3">
      {/* <TextForm heading ="Enter the text at analyze below" /> */}
      <About/>
      </div>
    
    </>
  );
}

export default App;
