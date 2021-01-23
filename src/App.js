import React, { useState, useEffect } from "react"
import { Container, Row, Col, Button } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Axios from "axios"
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa"
import Loading from "./Loading";

function App() {
  const [details, SetDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const fetchDetails = async () => {

    // fetch('https://randomuser.me/api/', {}).then(results=>results.json()).then(data=>SetDetails(data.results[0]))
    // Axios.get('',{}) -> first input is url, second is header/topkens etc
    const response = await Axios.get('https://randomuser.me/api/', {})
    const data = response.data
    const details = data.results[0]
    SetDetails(details)
  }
  useEffect(() => {
    fetchDetails()
  }, [])
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000) //setting loading to false after 1 sec,
    //so after loading goes false our api displays info, else keeps showing loading 
  }, [])
  console.log(details);
  return (
    <>
      {loading === false ? (
        <div className="main-div">
          <Container className="contain">

            <img height="150" width="150" className="rounded-circle img-thumbnail image" src={details.picture?.large} />
            <div className="name"><h2>{details.name?.title} {details.name?.first} {details.name?.last}</h2></div>
            <div className="align">
              <span className="fluid-right icons"><FaPhone />   - {details.phone}</span>
              <span className="fluid-right icons"><FaEnvelope />   - {details.email}</span>
              <span className="fluid-right icons"><FaMapMarkedAlt />     - {details.location?.street?.name} {details.location?.street?.number}, {details.location?.city} {details.location?.state}, {details.location?.country}</span>
            </div>

          </Container>
          <button onClick={() => window.location.reload()} className="button">Load New User</button>
        </div>
      ) : (<Loading />)
      }
    </>
  );
}

export default App;
