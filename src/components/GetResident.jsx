/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';

// eslint-disable-next-line react/prop-types
const GetResident = ({ URLresident }) => {

  const [residentInfo, setResidentInfo] = useState({});

  useEffect(() => {
    axios
      .get(URLresident)
      .then(res => setResidentInfo(res.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='row col offset-s1  s10 m4 l3' style={{ padding: "20px 10px", margin: "0" }}>

      <div className="card ">

        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={residentInfo.image} />
        </div>

        <div className="card-content indigo lighten-2 ">
          <span className="card-title activator grey-text text-darken-4 center">
            {residentInfo.name}
            <i className="material-icons right"></i>
          </span>
        </div>


        {
          residentInfo.status === "Alive"
            ? (
              <div className="card-reveal row blue lighten-1" style={{ border: "solid 2px blue", margin: "0.1%", overflow: "hidden", padding: "5px" }}>
                <span className="card-title grey-text text-darken-4 col s12">
                  <i className="material-icons right">arrow_downward</i>
                </span>
                <h4 className='drop-shadow'> {residentInfo.name} </h4>
                <p><b className='drop-shadow-black'>Specie: </b> {residentInfo.species} </p>
                <p><b className='drop-shadow-black'>Type: </b> {residentInfo.type} </p>
                <p><b className='drop-shadow-black'>Status: </b> {residentInfo.status} 💙 </p>
                <p><b className='drop-shadow-black'>Origin: </b> {residentInfo.origin?.name} </p>
                <p><b className='drop-shadow-black'>Episodes: </b> {residentInfo.episode?.length} </p>
              </div>
            )
            : (
              <div className="card-reveal row red lighten-1" style={{ border: "solid 2px red", margin: "0.1%", overflow: "hidden", padding: "5px" }}>
                <span className="card-title grey-text text-darken-4 col s12">
                  <i className="material-icons right">arrow_downward</i>
                </span>
                <h4 className='drop-shadow'> {residentInfo.name} </h4>
                <p><b className='drop-shadow-black'>Specie: </b> {residentInfo.species} </p>
                <p><b className='drop-shadow-black'>Type: </b> {residentInfo.type} </p>
                <p><b className='drop-shadow-black'>Status: </b> {residentInfo.status} 💔 </p>
                <p><b className='drop-shadow-black'>Origin: </b> {residentInfo.origin?.name} </p>
                <p><b className='drop-shadow-black'>Episodes: </b> {residentInfo.episode?.length} </p>
              </div>
            )
        }
        {/* <div className="card-reveal row red lighten-1 ">
          <span className="card-title grey-text text-darken-4 col s12">
            <i className="material-icons right">arrow_downward</i>
          </span>
          <p><b>Specie: </b> {residentInfo.species} </p>
          <p><b>Type: </b> {residentInfo.type} </p>
          <p><b>Status: </b> {residentInfo.status} </p>
          <p><b>Origin: </b> {residentInfo.origin?.name} </p>
          <p><b>Episodes: </b> {residentInfo.episode?.length} </p>
        </div> */}

      </div>

    </div>
  );
};

export default GetResident;