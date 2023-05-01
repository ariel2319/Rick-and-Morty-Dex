// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import GetResident from './GetResident';
import LocationsDetails from './LocationsDetails';

// eslint-disable-next-line react/prop-types
const LocationInfo = ({ location, setLocation }) => {

  const [idSearch, setIdSearch] = useState("");

  /* const [isId, setIsId] = useState(false); */

  const searchById = () => {
    (idSearch < 0 || idSearch > 126) ? alert("Only 126 locations..Sorry!") : axios
      .get(`https://rickandmortyapi.com/api/location/${idSearch}`)
      .then(res => setLocation(res.data))
  }

  return (
    <div>
      <div className='row' >
        <LocationsDetails
          location={location}
        />
      </div>

      <div>
        {/* <button onClick={() => setIsId(!isId)}>
          {isId ? "ID" : "Letter"}
        </button> */}
        {
          <div className='container row'>

            <div className="input col s8">
              <input
                className='validate shadow'
                id='id'
                placeholder='ID Dimension'
                type="text"
                value={idSearch}
                autoFocus
                onChange={e => setIdSearch(e.target.value)}
              />
              <label htmlFor="id" className='col s8'> </label>
            </div>

            <div className="btn waves-effect waves-light right col s3 shadow">
              <span onClick={searchById} type="submit" name="action"> Search by ID
                <i className="material-icons right">search</i>
              </span>
            </div>


          </div>
        }
      </div>


      <div className='row' style={{ marginLeft: "25px" }}>
        {
          // eslint-disable-next-line react/prop-types
          location.residents?.map((resident) =>
            <GetResident
              URLresident={resident}
              key={resident}
            />
          )
        }
      </div>

    </div>
  );
};

export default LocationInfo;