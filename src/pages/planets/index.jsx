import { useState, useEffect } from "react";
import { API_ROUTES, API_URL } from "../../appconstants";

const Planets = () => {
  const [data, setData] = useState([]);
  const { PLANETS } = API_ROUTES;

  const fetchPlanets = () => {
    fetch(`${API_URL}${PLANETS}`)
      .then((res) => res.json())
      .then((json) => setData(json?.results));
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div className="container">
      <h1>Planet List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Oriental Period</th>
            <th>Terrain</th>
            <th>Gravity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.climate}</td>
              <td>{item.orbital_period}</td>
              <td>{item.terrain}</td>
              <td>{item.gravity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Planets;
