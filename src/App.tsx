import { useState } from 'react';
import "./styles/app.css"
import BreedList from './components/breedList';

function App() {
  const [breeds, setBreeds] = useState([]);

  fetch("/api/dogs")
  .then(response => response.json())
  .then(data => {
      setBreeds(data);
  });

  return (
    <>
      <div className='app'>
        <h1>Good Dogs</h1>
        <div className="breedListContainer">
          <BreedList breeds={breeds}/>
        </div>
      </div>
    </>
  );
}

export default App;
