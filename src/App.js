import {useState, useEffect} from 'react';
import Select from './components/Select';
import './App.css';

function App() {

  const [idioms, setidioms] = useState([]);

    useEffect(() =>{
        fetchidioms();
    }, [])

    const fetchidioms = function(){
        const request = fetch("https://d-oro.github.io/idioms_API/idioms_API.json")
        .then(response => response.json())
        .then(data => setidioms(data));
      }

  return (
    <div className="App">
      <div className="content">
          <h1>malaphor creation tool</h1>
          <Select listItems={idioms}/>

      </div>

    </div>
  );
}

export default App;