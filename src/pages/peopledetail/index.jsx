import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { API_ROUTES, API_URL } from "../../appconstants";

const PeopleDetail = () => {

  const { id } = useParams();
  const [data, setData] = useState({});
  const { PEOPLE } = API_ROUTES;
  
  // to fetch the people details
  const fetchPeopleDetails = (index) => {
    fetch(`${API_URL}${PEOPLE}/${index}/`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    let mounted = true;
    mounted && fetchPeopleDetails(id);
    return () => {
      mounted = false;
    };
  }, [id]);

  return (
    <React.Fragment>
      <h1>People Detail</h1>
      <h3>Name : {data?.name}</h3>
      <h3>Height : {data?.height}</h3>
      <h3>Mass : {data?.mass}</h3>
      <h3>Skin Color : {data?.skin_color}</h3>
      <h3>Eye Color : {data?.eye_color}</h3>
    </React.Fragment>
  );
};
export default PeopleDetail;
