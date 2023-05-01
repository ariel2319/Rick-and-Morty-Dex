import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import LocationInfo from './components/LocationInfo';
import Title from './components/Title';
import Footer from './components/Footer';

function App() {

  const [location, setLocation] = useState({});

  useEffect(() => {
    const locationRdm = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationRdm}`)
      .then(res => setLocation(res.data))
  }, [])

  /* console.log('location', location);  */

  return (
    <div>
      <div className='title'>
        <Title />
      </div>

      <LocationInfo
        location={location}
        setLocation={setLocation}
      />

      <div className='foot'>
        <Footer />
      </div>
    </div>
  )
}

export default App
