/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const LocationsDetails = ({ location }) => {
  return (
    <div>
      {
        // eslint-disable-next-line react/prop-types
        (location.residents?.length === 0) ?
          <div>
            <h3 className='center drop-shadow'>
              Nobody´s Home..
            </h3>
          </div>

          :

          <div className='container '>
            <div>
              <h3 className='center drop-shadow'>
                {location?.name}
              </h3>
            </div>

            <div className='card-panel teal lighten-4 shadow'>
              <div className=''> <b className='drop-shadow-black'> Residents: </b> {location?.residents?.length}</div>
              <div className=''> <b className='drop-shadow-black'> Dimension: </b> {location?.dimension} </div>
              <div className=''> <b className='drop-shadow-black'> Type: </b> {location?.type} </div>
              <div className=''> <b className='drop-shadow-black'> ID: </b> {location?.id} </div>
            </div>
          </div>
      }
    </div>
  );
};

export default LocationsDetails;